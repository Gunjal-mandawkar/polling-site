

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ---------- AUTH ----------

async function Register(username, password, email) {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password })
    });
    const data = await response.json();

    if (response.ok) {
      showView('homeView');
      loadHome();
    } else {
      const box = document.getElementById('registerMsg');
      box.textContent = data.message || 'Registration failed.';
      box.className = 'msg error';
    }
  } catch (error) {
    console.log(`Error while registering ${error}`);
  }
}

async function Login(username, password) {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();

    if (response.ok) {
      showView('homeView');
      loadHome();
    } else {
      const box = document.getElementById('loginMsg');
      box.textContent = data.message || 'Login failed.';
      box.className = 'msg error';
    }
  } catch (error) {
    console.error("Error while logging in: ", error);
  }
}

async function Logout() {
  if (!window.confirm("Are you sure you want to log out?")) return;
  try {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
    if (response.ok) {
      showView('loginView');
    }
  } catch (error) {
    console.error(`Logout failed ${error}`);
  }
}

async function DeleteAcc() {
  if (!window.confirm("Delete your account permanently? This cannot be undone.")) return;
  try {
    const response = await fetch('/api/auth/deleteacc', {
      method: 'POST',
      credentials: 'include'
    });
    if (response.ok) {
      showView('registerView');
    }
  } catch (error) {
    console.log(`Error while deleting account ${error}`);
  }
}

// ---------- HOME (search + default polls) ----------

async function loadHome() {
  await defaultpolls();
}

async function searchpoll(searchString) {
  const query = searchString.toLowerCase();
  try {
    const response = await fetch('/api/user/search', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    if (!response.ok) throw new Error("response not ok");

    const polls = await response.json();
    renderPollList(polls, 'pollResults');
  } catch (error) {
    console.log("Error fetching polls:", error);
  }
}

async function defaultpolls() {
  try {
    const response = await fetch('/api/user/pollsite', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    });
    const polls = await response.json();
    renderPollList(polls, 'pollResults');
  } catch (error) {
    console.log("Error loading default polls:", error);
  }
}

// Shared renderer for any list of {pollid, title} poll summaries
function renderPollList(polls, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  if (!polls || polls.length === 0) {
    container.innerHTML = '<p class="empty-state">No polls to show.</p>';
    return;
  }

  polls.forEach(poll => {
    const card = document.createElement('div');
    card.className = 'poll-card';
    card.textContent = poll.title;
    card.addEventListener('click', () => {
      window.currentPollId = poll.pollid;
      if (poll.type === 'private') {
        showView('joinCodeView');
      } else {
        joinpoll(poll.pollid, null);
      }
    });
    container.appendChild(card);
  });
}

// ---------- DASHBOARD ----------

async function dashboard() {
  try {
    const response = await fetch('/api/user/dashboard', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    renderDashboard(data.hostedPolls, data.votesCast);
  } catch (error) {
    console.log("Error loading dashboard:", error);
  }
}

function renderDashboard(hostedPolls, votesCast) {
  const hostedContainer = document.getElementById('hostedPolls');
  hostedContainer.innerHTML = '';
  hostedPolls.forEach(poll => {
    const row = document.createElement('div');
    row.className = 'poll-card';
    row.textContent = poll.title + (poll.finalized ? ' (ended)' : ' (ongoing)');
    row.addEventListener('click', () => {
      if (poll.finalized) {
        analytics(poll.pollid);
      } else {
        window.currentPollId = poll.pollid;
        joinpoll(poll.pollid, null);
      }
    });
    hostedContainer.appendChild(row);
  });

  const votesContainer = document.getElementById('votesCast');
  votesContainer.innerHTML = '';
  votesCast.forEach(v => {
    const row = document.createElement('div');
    row.className = 'poll-card';
    row.textContent = v.option.poll.title;
    row.addEventListener('click', () => {
      window.currentPollId = v.option.poll.pollid;
      joinpoll(v.option.poll.pollid, null);
    });
    votesContainer.appendChild(row);
  });
}

// ---------- CREATE POLL ----------

async function postpoll(title, options, type, code, multiselect, showResult, startTime, endTime) {
  try {
    const response = await fetch('/api/user/postpoll', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, options, type, code, multiselect, showResult, startTime, endTime })
    });
    const data = await response.json();

    if (response.ok) {
      showView('homeView');
      loadHome();
    } else {
      const box = document.getElementById('createPollMsg');
      box.textContent = data.error || 'Could not create poll.';
      box.className = 'msg error';
    }
  } catch (error) {
    console.error("Error while posting the poll:", error);
  }
}

// ---------- JOIN / VIEW A POLL ----------

async function joinpoll(pollid, code) {
  try {
    const response = await fetch(`/api/user/poll/${pollid}`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });

    const data = await response.json();

    if (response.ok) {
      window.currentPollId = pollid;
      renderPollPage(data.poll);
      showView('pollView');
    } else {
      const box = document.getElementById('joinCodeMsg');
      if (box) {
        box.textContent = data.error || 'Could not join poll.';
        box.className = 'msg error';
      }
    }
  } catch (error) {
    console.error("Join poll error:", error);
  }
}

function renderPollPage(poll) {
  document.getElementById('pollTitle').textContent = poll.title;
  const container = document.getElementById('pollOptions');
  container.innerHTML = '';

  poll.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.desc;
    btn.dataset.optionid = opt.optionid;
    btn.addEventListener('click', () => {
      vote(poll.pollid, opt.optionid, btn, poll.multiselect);
    });
    container.appendChild(btn);
  });
}

// ---------- VOTE (never navigates away) ----------

async function vote(pollid, optionid, btnEl, multiselect) {
  try {
    const response = await fetch('/api/user/vote', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pollid, optionid })
    });
    const result = await response.json();

    if (response.ok) {
      if (multiselect) {
        // multiselect: this specific option's own vote just got toggled
        btnEl.classList.toggle('selected');
      } else {
        // single-select: clear any other glowing option, glow only this one
        document.querySelectorAll('#pollOptions .option-btn').forEach(b => b.classList.remove('selected'));
        btnEl.classList.add('selected');
      }
      showToast('Vote recorded');
    } else {
      showToast(result.error || 'Could not record vote');
    }
    // Intentionally no showView() call here — user stays on the poll page.
  } catch (error) {
    console.log(`Error while voting ${error}`);
  }
}

// ---------- PAST POLLS + ANALYTICS ----------

async function pastpoll() {
  try {
    const response = await fetch('/api/user/pastpoll', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    renderPastPollsList(data.past, 'pastPollsList');
  } catch (error) {
    console.error("Error while fetching pastpolls:", error);
  }
}
function renderPastPollsList(polls, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  if (!polls || polls.length === 0) {
    container.innerHTML = 'No past polls found.';
    return;
}
polls.forEach(poll => {
  const card = document.createElement('div');
  card.className = 'poll-card';
  card.textContent = poll.title + ' (ended)';
  // Clicking a past poll opens its analytics page instead of trying to join it
  card.addEventListener('click', () => {
  analytics(poll.pollid);
  });
  container.appendChild(card);
  });
  }

async function analytics(pollid) {
  try {
    const response = await fetch(`/api/user/analytics/${pollid}`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    if (response.ok) {
      renderAnalytics(data);
      showView('analyticsView');
    } else {
      console.log('Analytics error:', data.error);
    }
  } catch (error) {
    console.log(`Error while getting poll analytics ${error}`);
  }
}

function renderAnalytics(data) {
  document.getElementById('analyticsTitle').textContent = data.poll.title;
  document.getElementById('analyticsTotal').textContent = `Total votes: ${data.poll.totalVotes}`;

  const container = document.getElementById('analyticsBreakdown');
  container.innerHTML = '';
  data.analysis.forEach(opt => {
    const row = document.createElement('div');
    row.className = 'analytics-row';
    const isWinner = data.winningOption && data.winningOption.optionid === opt.optionid;
    row.innerHTML = `<span>${opt.desc}${isWinner ? ' 🏆' : ''}</span><span>${opt.votes} votes (${opt.percentage}%)</span>`;
    container.appendChild(row);
  });
}

async function deletepoll(pollid) {
  if (!window.confirm("Delete this poll permanently?")) return;
  try {
    const response = await fetch(`/api/user/deletepoll/${pollid}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      pastpoll();
    }
  } catch (error) {
    console.log(`Error while deleting the poll ${error}`);
  }
}