//
function script7650(int0: component): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varclient_2746 == 1)) {
        if (((IF_GETGRAPHIC(int0) != 16934 as graphic) && (IF_GETGRAPHIC(int0) != 16936 as graphic))) {
            stack(16934);
            stack(int0);
            IF_SETGRAPHIC();
        };
        script8800("Skip button", int0, -1);
    };
    return;
}