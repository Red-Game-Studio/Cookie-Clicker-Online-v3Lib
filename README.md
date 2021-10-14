# Cookie-Clicker-Online-v3Lib
v3Lib. Please fork to make clients.


## Paste the following into your client
```js
// v3Lib importer

// Use your modded one if you want!
var lib = "https://raw.githubusercontent.com/Red-Game-Studio/Cookie-Clicker-Online-v3Lib/main/lib.js";

class OnlineClient {
	constructor(v3) {
		this.v3 = v3;
		this.initClient();
	}
	
	initClient() {
		Game.Prompt("Hello, World!")
	}
}

fetch(lib).then(x => x.text().then(res => {
	eval(res);
	new OnlineClient(
		new v3Lib()
	);
}));
```
