//
function script7747(int0: component): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varclient_1077 == true)) {
        script8800("Click here to access full song list", int0, -1);
        stack(16938);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        script8800("Click here to access playlist", int0, -1);
        stack(16940);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}