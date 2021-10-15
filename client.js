class OnlineClientLoader_Client {
  constructor() {
    this.v3 = new v3Lib();
    this.start();
  }

  start() {
    this.v3.join(prompt("Server Code", "AAAA"), prompt("Username", "Guest"));
  }
}
