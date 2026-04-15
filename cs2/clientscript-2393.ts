//
function script2393(int0: int, int1: int): void {
    var int2 = script2385(int0, 1);
    var int3 = script2385(-1, 1);
    if ((int1 != -1)) {
        if ((int3 > -1)) {
            var int1 = MIN(int1, int3);
        } else {
            if ((int2 == -1)) {
                return;
            };
            int3 = 30;
        };
    };
    if ((int2 == -1)) {
        if ((int1 == -1)) {
            return;
        };
        int2 = int3;
        if ((int2 == -1)) {
            SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
            return;
        };
    } else {
        int1 = MAX(-1, MIN(int1, (int3 - 1)));
    };
    var int4 = 0;
    if (((int2 < int1) || (int1 == -1))) {
        int4 = 1;
    } else if ((int2 > int1)) {
        int4 = -1;
    };
    var int5 = PLAYERMEMBER();
    var int6 = int2;
    var int7 = 0;
    var int8 = script2390(7);
    var int9 = 0;
    if ((IF_FIND(comp(1431, 1)) == 1)) {
        int9 = cc_getparam(6837);
    };
    while ((((int6 != int1) && (int2 != -1)) && (int2 != 30))) {
        int6 = (int6 + int4);
        int7 = script2384(int6, 1);
        if ((((int2 <= int9) || (int7 != int8)) || ((int7 == int8) && (int5 == true)))) {
            script2386(int2, int7);
            int2 = int6;
        };
    };
    if ((int1 != -1)) {
        if (((((int5 == false) && (int0 != int8)) && (script2384(int1, 1) == int8)) && (script2384((int1 - int4), 1) != int8))) {
            int1 = (int1 - int4);
        };
        script2386(int1, int0);
    } else if (((script6431() == true) && (script8314(int0) != -1))) {
        script8323(int0, 0);
        script13842(int0);
    };
    return;
}