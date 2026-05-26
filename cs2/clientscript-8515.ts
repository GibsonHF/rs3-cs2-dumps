//
function script8515(int0: number): void {
    varclient_2231 = int0;
    var int1 = script8550(int0);
    if ((int1 == 2)) {
        CHAT_SETMODE(0);
    } else if ((int1 == 102)) {
        CHAT_SETMODE(1);
    } else {
        CHAT_SETMODE(int1);
    };
    varclient_1652 = true;
    if ((varbitplayer_27169 == 0)) {
        script8311(int0);
    };
    script1558(int0, 0);
    return;
}