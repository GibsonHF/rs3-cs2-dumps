//
function script5894(): void {
    var string0 = "";
    var int0 = -1;
    if ((varbitplayer_25836 == 1)) {
        stack(25870);
        stack("Changes to lootshare settings are pending.");
        [int0, string0] = stack();
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
                stack(25868);
                stack("Lootshare is active.");
                [int0, string0] = stack();
                break;
            }
            case 2: {
                stack(25871);
                stack("Coinshare is active.");
                [int0, string0] = stack();
                break;
            }
            default: {
                stack(25869);
                stack("Lootshare and Coinshare are disabled.");
                [int0, string0] = stack();
                break;
            }
        };
    };
    script5895(int0, string0);
    return;
}