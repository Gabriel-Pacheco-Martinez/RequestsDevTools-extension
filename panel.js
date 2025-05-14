const requestList = document.getElementById('request-list');

chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
    // Construct JSON object
    let data = {
      method: request.request.method,
      url: request.request.url,
      headers: request.request.headers
    }

    // Log the JSON object
    console.log(JSON.stringify(data, null, 2));

    // Create a list item and append JSON
    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(data, null, 2);

    const li = document.createElement('li');
    li.appendChild(pre);
    requestList.appendChild(li);
  }
);