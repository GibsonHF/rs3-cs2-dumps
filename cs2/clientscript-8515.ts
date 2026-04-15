//
function script8515(int0: int): void {
    varclient_2231 = int0;
    var int1 = script8550(int0);
    if ((int1 == 2)) {
        stack(0);
        CHAT_SETMODE();
    } else if ((int1 == 102)) {
        stack(1);
        CHAT_SETMODE();
    } else {
        stack(int1);
        CHAT_SETMODE();
    };
    varclient_1652 = true;
    if ((varbitplayer_27169 == 0)) {
        script8311(int0);
    };
    script1558(int0, 0);
    return;
}