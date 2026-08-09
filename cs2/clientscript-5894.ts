//
function script5894(): void {
    var string0 = "";
    var int0 = -1;
    if ((varbitplayer_25836 == 1)) {
        [int0, string0] = [25870, "Changes to lootshare settings are pending."];
        switch (varplayergroup_21) {
            case 1: {
                string0 = strconcat(string0, "<br>Lootshare is currently active.");
                break;
            }
            case 2: {
                string0 = strconcat(string0, "<br>Coinshare is currently active.");
                break;
            }
            default: {
                string0 = strconcat(string0, "<br>Lootshare and Coinshare are currently disabled.");
                break;
            }
        };
    } else {
        switch (varplayergroup_21) {
            case 1: {
                [int0, string0] = [25868, "Lootshare is active."];
                break;
            }
            case 2: {
                [int0, string0] = [25871, "Coinshare is active."];
                break;
            }
            default: {
                [int0, string0] = [25869, "Lootshare and Coinshare are disabled."];
                break;
            }
        };
    };
    script5895(int0, string0);
    return;
}