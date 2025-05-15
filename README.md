# REQUESTS (devtools)

This demonstrates a devtools extension that uses the API `devtools.network` to extract the network requests of the current page.

## Files

- manifest.json: structure of the extension 

- devtools.html: access port to devtools.json to enable `devtools` extension APIs 

- devtools.json: opens the panel inside the developer tools window

- panel.html: shows the list of requests

- panel.js: appends requests

## Running this extension

1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension]
3. Navigate to a webpage and open the devtools window.
4. Navigate to the new devtools panel named "Requests", and click on the button.


## Process

### 1.- **Creating extension**
First of the devtools extension was created for which the devtools.html is the entry
point and the panel.html shows the list of requests.

### 2.- **Ideas**
- We can have two sidepanels. One which shows all the requests and the other one
which shows the filtered ones.

- Use of the chrome.declarativeNetRequest which is an API used to block or modify network
requests by specifying declarative rules.


- We have static rules imposed for main frames, sub frames, ajax requests and scripts in general.