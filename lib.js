/*
## v3Lib
- ```constructor( website [optional] )``` Website Override.
- ```join(code, name)``` Join Server
- ```miniServer()``` Join Mini Server in website override.
- ```handleData()```  Returns cookies, upgrade IDs and players.
//- ```uploadCookies()``` Uploads cookies.
//- ```uploadUpgrades()``` Uploads upgrades.
- ```upload()``` Uploads Everything.
*/
class v3Lib {
    constructor(website) {
        if (website) this.site = website;
        else this.site = "https://cookieclickeronline.glitch.me";

        // Init
        this.last = {
            cookies: 0,
            upgrades: []
        };

        this.code = null;
        this.serverData = null;
    }

    join(code, name) {
        this.code = code;
        var plr = name.replaceAll("x", "*").replaceAll("X", "&");
        fetch(`${this.site}/users_j:${code}x${plr}`);
        window.onbeforeunload = () => {
            fetch(`${this.site}/users_l:${code}x${plr}}`);
            return null;
        };
        fetch(`${this.site}/users_u:${this.code}x{"cookies": 0, "upgrades": []}`).then((x) => x.json().then(res => {
            this.serverData = res;
            this.last = res;
        }));
    }

    upload() {
        if (this.code) {
            var upgradesOwned = [];

            for (var id in Game.UpgradesById) {
                var upgrade = Game.UpgradesById[id];

                if (upgrade.bought) {
                    upgradesOwned.push(id);
                }
            }

            var data = {
                cookies: Game.cookies - last.cookies,
                upgrades: upgradesOwned
            };

            fetch(`${this.site}/users_u:${this.code}x${JSON.stringify(data)}`).then((x) => x.json().then(res => {
                this.serverData = res;
            }));
        }
    }

    handleData() {
        var data = this.serverData;
        if (data) {
            Game.Earn(data.cookies - Game.cookies);

            for (var i in data.upgrades) {
                var id = data.upgrades[i];
                var upgrade = Game.UpgradesById[id];

                if (!upgrade.bought) {
                    upgrade.toggle();
                }
            }

            this.last = this.serverData;

            return {players: this.last.playerList, playersInGame: this.last.playerAmount, error: 0};
        }
        return {error: 1};
    }
}
