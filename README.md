# Cookie Clicker Online v3Lib
v3Lib. Please fork to make clients.

# Making a Client
## 1. Modifying v3Lib
You can skip this step if you want to have an unmodified experience.
## 2. Setting up ```client.js```
1. Copy and paste ```lib.js``` at the top of the script.
2. Copy and paste this script:
```js
// lib goes here...

class OnlineClient {
  constructor() {
    this.v3 = new v3Lib();
    this.start();
  }
  
  start() {
    // client code here...
  }
}

new OnlineClient();
```
3. Create the client.

# Documentation

- ```constructor( website [optional] )``` Website Override.
- ```join(code, name)``` Join Server. Set code to an empty string to join a mini server
- ```handleData()```  Returns cookies, upgrade IDs, player list and player amount.
- ```upload()``` Uploads Everything.
