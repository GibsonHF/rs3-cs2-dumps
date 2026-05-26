//
function script531(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1 as graphic;
    var int5 = 0;
    var int6 = -1;
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = false;
    if ((((int0 == comp(-1, 65535)) || (int1 == -1 as graphic)) || (int2 == -1 as graphic))) {
        return;
    };
    if ((int0 == comp(301, 52))) {
        int5 = script543(varbitplayer_3044);
        int7 = comp(301, 34);
        int8 = comp(301, 35);
    };
    if ((int0 == comp(301, 53))) {
        int5 = script543(varbitplayer_3045);
        int7 = comp(301, 36);
        int8 = comp(301, 37);
    };
    if ((int0 == comp(301, 54))) {
        int5 = script543(varbitplayer_3047);
        int7 = comp(301, 38);
        int8 = comp(301, 39);
    };
    if ((int0 == comp(301, 55))) {
        int5 = script543(varbitplayer_3049);
        int7 = comp(301, 40);
        int8 = comp(301, 41);
    };
    if ((int0 == comp(301, 56))) {
        int5 = script543(varbitplayer_3050);
        int7 = comp(301, 42);
        int8 = comp(301, 43);
    };
    if ((int0 == comp(301, 57))) {
        int5 = script543(varbitplayer_3052);
        int7 = comp(301, 44);
        int8 = comp(301, 45);
    };
    if ((int0 == comp(301, 58))) {
        int5 = script543(varbitplayer_3054);
        int7 = comp(301, 46);
        int8 = comp(301, 47);
    };
    if ((int0 == comp(301, 59))) {
        int5 = script543(varbitplayer_3055);
        int7 = comp(301, 48);
        int8 = comp(301, 49);
    };
    if ((int0 == comp(301, 60))) {
        int5 = script543(varbitplayer_3056);
        int7 = comp(301, 50);
        int8 = comp(301, 51);
    };
    if ((int5 == 1)) {
        int4 = int1;
        int9 = false;
        IF_SETCOLOUR(16430130, int7);
        IF_SETCOLOUR(16430130, int8);
    } else {
        int4 = int2;
        int9 = true;
        IF_SETCOLOUR(13420487, int7);
        IF_SETCOLOUR(13420487, int8);
    };
    IF_SETGRAPHIC(int4, int0);
    IF_SETHIDE(int9, int3);
    return;
}