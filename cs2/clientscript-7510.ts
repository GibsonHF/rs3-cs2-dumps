//
function script7510(int0: number): void {
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
        SOUND_VORBIS_VOLUME(16778 as vorbis, 1, 0, 50);
        if ((int1 > 0)) {
            varclient_2705 = (varclient_2705 - 1);
            IF_SETGRAPHIC(script7504(script7513(varclient_2705)), comp(1389, 15));
            IF_SETTEXT(script7505(script7513(varclient_2705)), comp(1389, 7));
            IF_SETTEXT(script7515(script7513(varclient_2705)), comp(1389, 26));
            IF_SETONTIMER(callback(script7511, 100, 0, int2), comp(1389, 5));
        } else {
            varclient_2705 = (varclient_2705 + 1);
            IF_SETGRAPHIC(script7504(script7513(varclient_2705)), comp(1389, 15));
            IF_SETTEXT(script7505(script7513(varclient_2705)), comp(1389, 7));
            IF_SETTEXT(script7515(script7513(varclient_2705)), comp(1389, 26));
            IF_SETONTIMER(callback(script7511, -100, 1, int2), comp(1389, 5));
        };
        varclient_2706 = true;
    };
    return;
}