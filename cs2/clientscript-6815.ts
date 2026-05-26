//
function script6815(int0: number, int1: number): void {
    if ((int1 == -1)) {
        return;
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    [int2, int3] = script6816(int0);
    [int4, int5] = script6816(int1);
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    [int6, int7] = script6817(int0);
    [int8, int9] = script6817(int1);
    if ((int0 == -1)) {
        return;
    };
    if ((int8 == 88539136)) {
        return;
    };
    if ((((int2 == 13522) && (int4 == -1)) && (script6818(int1) == 1))) {
        stack(-1);
        stack(int6);
        IF_SETGRAPHIC();
        stack(-1);
        stack(int7);
        IF_SETGRAPHIC();
        stack(int2);
        stack(int8);
        IF_SETGRAPHIC();
        stack(int3);
        stack(int9);
        IF_SETGRAPHIC();
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(19113, 1, 0, (120 + RANDOM(60)), 10, 10));
    };
    return;
}