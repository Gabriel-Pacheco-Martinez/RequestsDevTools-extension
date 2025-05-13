const requestList = document.getElementById('request-list');

chrome.devtools.network.onRequestFinished.addListener((request) => {
  const li = document.createElement('li');
  li.textContent = `${request.request.method} ${request.request.url}`;
  requestList.appendChild(li);
});