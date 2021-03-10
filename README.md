# URL SHORTENER

In this project, there is a simple api that performs the url shortening process and an extension that makes it ready to paste automatically by shortening the address of the active tab in chrome using this api.

- This extension currently only works on localhost.

## Installation

- Clone this project: `git clone git@github.com:eymiramazan/url-shortener.git`
- Open Server Folder: ` cd url-shortener/server`
- Install dependencies: `npm i`

After these steps, for mongo database operation;
- Copy your mongodb atlas url.
- Go to **config/example-default.json** file and rename it to **default.json** .
- Open the **default.json file** and paste your mongo url here:
`"mongoURI": "PASTE-YOUR-MONGOURL-HERE"`
- After that you can run the server with: `npm run dev`

### Extension Upload
1. Open Google Chrome.
2. Open Google Chrome settings by clicking the three dots at the top right.
3. Then click on extensions from the menu on the left.
4. Enable developer mode in the top right.
5. Click on Load Unpacked and select the **url-shortener** folder you cloned.
6. Then, go to a page whose URL you want to shorten and click the extension's icon.
7. The shortened url will come ready to be pasted into your clipboard.




