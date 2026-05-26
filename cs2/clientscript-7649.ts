//
function script7649(int0: number): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varclient_2746 == 0)) {
        script8800("Shuffle on", int0, -1);
        IF_SETGRAPHIC(16928 as graphic, int0);
    } else {
        script8800("Shuffle off", int0, -1);
        IF_SETGRAPHIC(16926 as graphic, int0);
    };
    return;
}