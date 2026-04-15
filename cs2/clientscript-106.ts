//[clientscript,trail_puzzle_click]
function script106(int0: component, int1: int, int2: unknown_int, int3: inv): void {
    if ((int2 != 1)) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    while ((int4 < INV_SIZE(int3))) {
        if (((CC_FIND(int0, int4) == 1) && (CC_GETHIDE() == true))) {
            int5 = int4;
        };
        int4 = (int4 + 1);
    };
    int7 = (int1 / 5);
    int6 = (int1 - (int7 * 5));
    if (((((int5 == (int1 - 1)) && (int6 > 0)) && (CC_FIND(int0, int1) == 1)) && (CC_FIND[1](int0, int5) == 1))) {
        SOUND_VORBIS_VOLUME(7570 as vorbis, 1, 0, 200);
        CC_SETPOSITION((56 * (int6 - 1)), (56 * int7), 0, 0);
        CC_SETPOSITION[1]((56 * int6), (56 * int7), 0, 0);
        return;
    };
    if (((((int5 == (int1 + 1)) && (int6 < 5)) && (CC_FIND(int0, int1) == 1)) && (CC_FIND[1](int0, int5) == 1))) {
        SOUND_VORBIS_VOLUME(7570 as vorbis, 1, 0, 200);
        CC_SETPOSITION((56 * (int6 + 1)), (56 * int7), 0, 0);
        CC_SETPOSITION[1]((56 * int6), (56 * int7), 0, 0);
        return;
    };
    if (((((int5 == (int1 - 5)) && (int7 > 0)) && (CC_FIND(int0, int1) == 1)) && (CC_FIND[1](int0, int5) == 1))) {
        SOUND_VORBIS_VOLUME(7570 as vorbis, 1, 0, 200);
        CC_SETPOSITION((56 * int6), (56 * (int7 - 1)), 0, 0);
        CC_SETPOSITION[1]((56 * int6), (56 * int7), 0, 0);
        return;
    };
    if (((((int5 == (int1 + 5)) && (int7 < 5)) && (CC_FIND(int0, int1) == 1)) && (CC_FIND[1](int0, int5) == 1))) {
        SOUND_VORBIS_VOLUME(7570 as vorbis, 1, 0, 200);
        CC_SETPOSITION((56 * int6), (56 * (int7 + 1)), 0, 0);
        CC_SETPOSITION[1]((56 * int6), (56 * int7), 0, 0);
        return;
    };
    return;
}