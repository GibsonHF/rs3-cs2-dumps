//
function script10219(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script7(-1 as npc);
    if ((int0 == -1)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = varclient_3701;
    var int5 = varclient_3700;
    if ((varbitplayer_27168 == 1)) {
        if ((int4 > 0)) {
            int4 = MAX(1, (int4 / 10));
        };
        int5 = MAX(1, (int5 / 10));
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int4, 1), comp(1490, 34));
    int2 = MAX(MIN(SCALE(int4, int5, 100), 100), 0);
    int3 = ((int2 * 16384) / 100);
    IF_SETSIZE(int3, IF_GETHEIGHT(comp(1490, 33)), 2, 0, comp(1490, 24));
    script17671(250, varclient_7158);
    script5(int0, int1);
    return;
}