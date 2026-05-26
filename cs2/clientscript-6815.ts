//
function script6815(int0: number, int1: number): void {
    if ((int1 == -1)) {
        return;
    };
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    var int5 = -1 as graphic;
    [int2, int3] = script6816(int0);
    [int4, int5] = script6816(int1);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    [int6, int7] = script6817(int0);
    [int8, int9] = script6817(int1);
    if ((int0 == -1)) {
        return;
    };
    if ((int8 == comp(1351, 0))) {
        return;
    };
    if ((((int2 == 13522 as graphic) && (int4 == -1 as graphic)) && (script6818(int1) == 1))) {
        IF_SETGRAPHIC(-1 as graphic, int6);
        IF_SETGRAPHIC(-1 as graphic, int7);
        IF_SETGRAPHIC(int2, int8);
        IF_SETGRAPHIC(int3, int9);
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(19113 as vorbis, 1, 0, (120 + RANDOM(60)), 10, 10));
    };
    return;
}