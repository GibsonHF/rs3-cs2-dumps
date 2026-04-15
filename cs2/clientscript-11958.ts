//
function script11958(): string {
    var string0 = "";
    if ((varbitplayer_30084 == 1)) {
        string0 = "You can feed the oyster this month.<br>";
    } else if ((varbitplayer_30084 == 2)) {
        string0 = "You have fed the oyster this month.<br>";
    } else {
        string0 = "An oyster treasure is waiting for you.<br>";
    };
    if ((varbitplayer_30087 < 30)) {
        string0 = `${string0}You still have Fishing experience you can gain from the sea cucumber fishing spot this month.<br>`;
    } else {
        string0 = `${string0}You have gained all the Fishing experience from the sea cucumber fishing spot this month.<br>`;
    };
    if ((varbitplayer_30088 < 30)) {
        string0 = `${string0}You still have Farming experience you can gain from the seaweed farming patch this month.<br>`;
    } else {
        string0 = `${string0}You have gained all the Farming experience from the seaweed farming patch this month.<br>`;
    };
    return string0;
}