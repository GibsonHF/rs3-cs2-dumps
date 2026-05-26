//
function script7524(int0: number): void {
    var int1 = 0;
    var int2 = 3;
    if ((varclient_2707 == 5)) {
        int2 = 5;
    } else if ((varclient_2707 >= 3)) {
        int2 = 4;
    };
    if (((varclient_2705 < int2) && (varclient_2706 == false))) {
        SOUND_VORBIS_VOLUME(16778, 1, 0, 50);
        varclient_2705 = (varclient_2705 + 1);
        IF_SETGRAPHIC(script7504(script7529(varclient_2705)), 91291659);
        IF_SETTEXT(script7505(script7529(varclient_2705)), 91291652);
        IF_SETTEXT(script7515(script7529(varclient_2705)), 91291663);
        IF_SETONTIMER(callback(script7528, -100, 1, int0), 91291650);
        varclient_2706 = 1;
    };
    return;
}