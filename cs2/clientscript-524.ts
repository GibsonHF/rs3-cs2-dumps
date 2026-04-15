//
function script524(int0: component, int1: component): void {
    var int2 = 0;
    if ((varbitplayer_3057 >= 300000)) {
        IF_SETCOLOUR(16711680, int0);
        return;
    };
    if ((int0 == comp(301, 34))) {
        int2 = varbitplayer_3044;
    };
    if ((int0 == comp(301, 36))) {
        int2 = varbitplayer_3045;
    };
    if ((int0 == comp(301, 38))) {
        int2 = varbitplayer_3047;
    };
    if ((int0 == comp(301, 40))) {
        int2 = varbitplayer_3049;
    };
    if ((int0 == comp(301, 42))) {
        int2 = varbitplayer_3050;
    };
    if ((int0 == comp(301, 44))) {
        int2 = varbitplayer_3052;
    };
    if ((int0 == comp(301, 46))) {
        int2 = varbitplayer_3054;
    };
    if ((int0 == comp(301, 48))) {
        int2 = varbitplayer_3055;
    };
    if ((int0 == comp(301, 50))) {
        int2 = varbitplayer_3056;
    };
    if (((int0 == comp(301, 70)) || (int0 == comp(301, 71)))) {
        int2 = 1;
    };
    if ((int2 == 1)) {
        IF_SETCOLOUR(16430130, int0);
        IF_SETCOLOUR(16430130, int1);
    } else {
        IF_SETCOLOUR(13420487, int0);
        IF_SETCOLOUR(13420487, int1);
    };
    return;
}