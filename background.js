chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.getSelected(null, (tab) => {
    var tabLink = tab.url;

    fetch('http://localhost:5000/api/url/shorten', {
      method: 'POST',
      body: JSON.stringify({
        longUrl: tabLink
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    }).then(function (data) {
      copyToClipboard(data.shortUrl);
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });

    async function copyToClipboard(text) {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = await text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      window.confirm("SUCCESFULLY COPIED!");
    }
  })
});

