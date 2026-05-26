//
function script7650(int0: number): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varclient_2746 == 1)) {
        if (((IF_GETGRAPHIC(int0) != 16934) && (IF_GETGRAPHIC(int0) != 16936))) {
            IF_SETGRAPHIC(16934, int0);
        };
        script8800("Skip button", int0, -1);
    };
    return;
}