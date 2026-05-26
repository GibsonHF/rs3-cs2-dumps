//
function script7527(int0: number): void {
    var int1 = (varclient_2705 - int0);
    var int2 = 0;
    if ((varclient_2706 == true)) {
        return;
    };
    if ((int1 < 0)) {
        int2 = (int0 - varclient_2705);
    } else if ((int1 > 0)) {
        int2 = int1;
    };
    if ((int2 > 0)) {
        SOUND_VORBIS_VOLUME(16778, 1, 0, 50);
        if ((int1 > 0)) {
            varclient_2705 = (varclient_2705 - 1);
            IF_SETGRAPHIC(script7504(script7529(varclient_2705)), 91291659);
            IF_SETTEXT(script7505(script7529(varclient_2705)), 91291652);
            IF_SETTEXT(script7515(script7529(varclient_2705)), 91291663);
            IF_SETONTIMER(callback(script7528, 100, 0, int2), 91291650);
        } else {
            varclient_2705 = (varclient_2705 + 1);
            IF_SETGRAPHIC(script7504(script7529(varclient_2705)), 91291659);
            IF_SETTEXT(script7505(script7529(varclient_2705)), 91291652);
            IF_SETTEXT(script7515(script7529(varclient_2705)), 91291663);
            IF_SETONTIMER(callback(script7528, -100, 1, int2), 91291650);
        };
        varclient_2706 = true;
    };
    return;
}