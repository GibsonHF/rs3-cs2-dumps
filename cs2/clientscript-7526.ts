//
function script7526(int0: number): void {
    var int1 = 0;
    var int2 = 3;
    if ((varclient_2707 >= 4)) {
        int2 = 1;
    } else if ((varclient_2707 >= 2)) {
        int2 = 2;
    };
    if (((varclient_2705 > int2) && (varclient_2706 == false))) {
        SOUND_VORBIS_VOLUME(16778 as vorbis, 1, 0, 50);
        varclient_2705 = (varclient_2705 - 1);
        IF_SETGRAPHIC(script7504(script7529(varclient_2705)), comp(1393, 11));
        IF_SETTEXT(script7505(script7529(varclient_2705)), comp(1393, 4));
        IF_SETTEXT(script7515(script7529(varclient_2705)), comp(1393, 15));
        IF_SETONTIMER(callback(script7528, 100, 0, int0), 91291650);
        varclient_2706 = 1;
    };
    return;
}