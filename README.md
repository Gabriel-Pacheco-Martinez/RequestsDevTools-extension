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