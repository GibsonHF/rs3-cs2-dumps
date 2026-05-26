//
function script7747(int0: number): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varclient_1077 == true)) {
        script8800("Click here to access full song list", int0, -1);
        IF_SETGRAPHIC(16938 as graphic, int0);
    } else {
        script8800("Click here to access playlist", int0, -1);
        IF_SETGRAPHIC(16940 as graphic, int0);
    };
    return;
}