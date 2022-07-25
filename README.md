# Chrome new tab extension ([Winky Widgets](https://chrome.google.com/webstore/detail/winky-widgets/mfgcpbcdabageodfebcphkcidhfgcghl))


## Introduction:
In this series we're going to see how to create a Chrome extension with React. 

We're going to build **6 React apps** and combine them into one single interface to form a Chrome extension that gets opened on every new tab. 

This project features 6 widgets (**Time and date component, Greeting component, Weather app, Crypto rates app, Todos app and a Bookmarker app**).

We'll cover a bunch of modern JavaScript concepts by consuming 3 free external APIs and saving data to the browser's localStorage.

The [extension](https://chrome.google.com/webstore/detail/winky-widgets/mfgcpbcdabageodfebcphkcidhfgcghl) is available on the Chrome Web Store.

## List of tutorials:
This is the official repository of the youtube tutorial playlist:

- [x] [Time component](https://www.youtube.com/watch?v=jWpqpUqb5rI) | [commit](https://github.com/NizarAffess/new-tab-extension/commit/6313b997f1cbe1d22557f87fc7137a950e2f292d). 
- [x] [Greeting component](https://www.youtube.com/watch?v=BerwuXS6_Mc) | [commit](https://github.com/NizarAffess/new-tab-extension/commit/9b533f8a67f8131ee2437997babf9af6bb07e130).
- [x] [Weather app](https://www.youtube.com/watch?v=A3w_cecWiUE) | [commit](https://github.com/NizarAffess/new-tab-extension/commit/53a0b0ad927139b1808add476b9726fff88c3bcc). 
- [x] [Crypto app](https://youtu.be/d1EqwCsqgMs) | [commit](https://github.com/NizarAffess/new-tab-extension/commit/94e81a855fb7e54fdb431618d6c961c632313e18). 
- [x] [Todos app](https://youtu.be/6YeudGTBb7E) | [commit](https://github.com/NizarAffess/new-tab-extension/commit/5cd32b56f1e02c424b239219ff4f506d6032a0bc). 
- [x] [Bookmarks app](https://youtu.be/hcudR7lHmUE) | [commit](https://github.com/NizarAffess/new-tab-extension/commit/e48d66423644c36f50bcadda76ee943b3816c0ea). 

## Publish the extension:
The first main thing we should provide is a **manifest.json** file.

The manifest file provides the details of the extension.
It has a bunch important information that could be required (like name, version...), recommended (description, icons...) or even optional fields (author, autoamtion...). You can find the [list](https://developer.chrome.com/docs/extensions/mv3/manifest/) of all fields in the [official docs](https://developer.chrome.com/docs/extensions/mv3/getstarted/).

### Steps to create and publish a Chrome extension:
In this [page](https://support.google.com/chrome/a/answer/2714278?hl=en) you'll find all the steps required to build, test and publish you extension.

## Our manifest file explanation:
The first four fields are self-explanatory (name, author, version and description).
- **permissions:**
  - In order to be able to save todos and bookmarks to the user's local storage we need the access to the browser **storage**. 
  - To open the extension in each new tab we also need the **tabs** permission.
- **action:**
  - It is recommended to provide some icons to be used as the extension's logo. In this case the manifest requires a 128p by 128p icon saved as 128.png.
  - A default_title is needed as well (it's the actual extension name).

- So those actions are recommended (you can ignore them) as stated in the docs.
But a list of icons is required. These icons are going to be used by Chrome based on some conditions. 
> You may provide icons of any other size you wish, and Chrome will attempt to use the best size where appropriate. For example, Windows often requires 32-pixel icons, and if the app includes a 32-pixel icon, Chrome will choose that instead of shrinking a 48-pixel icon down. However, you should ensure that all of your icons are square, or unexpected behavior may result.

- **chrome_url_overrides**:
On each new tab opened we want our code to override the default code that was running. So when a new tab is opened it's going to show the index.html file which in turn is going to render our React app.
- **manifest_version**: 
The current manifest version used. Just like any technology version you use in your project. But each version has different specs and improvements. You can't mix fields between manifest V2 and V3. Check out the  [migration guide](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/).

## key takeaways:
- Create an icons folder in the public folder and add the list of icons named by their sizes preferably in PNG format (has the best support for transparency).

- To display your extension's logo as the new tab favicon create a favicon.ico image file in the public folder as well.

- You may encounter an error about your manifest file after loading unpacked. If this happens go to index.html and comment this line:
```html
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```