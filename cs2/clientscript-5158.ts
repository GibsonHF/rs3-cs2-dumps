//
function script5158(int0: component, int1: component, int2: component): void {
    IF_SETCOLOUR(HSVTORGB(varplayer_1111), int2);
    var int3 = IF_GETHEIGHT(int1);
    var int4 = 1;
    if ((varbitplayer_3020 > 0)) {
        int4 = MAX(MIN((int3 - (varbitplayer_3020 * 2)), int3), 0);
    };
    script5168(int4);
    var int5 = IF_GETHEIGHT(int0);
    var int6 = 0;
    if ((varbitplayer_3021 > 0)) {
        int6 = MAX(MIN((int5 - (varbitplayer_3021 * (int5 / 8))), int5), 0);
        int6 = MAX(MIN((int6 - (int5 / 16)), int5), 0);
    };
    var int7 = 0;
    if ((varbitplayer_3022 > 0)) {
        int7 = MAX(MIN((varbitplayer_3022 * (int5 / 128)), int5), 0);
    };
    IF_SETCOLOUR(varbitplayer_3020, int0);
    script5167(int7, int6);
    return;
}