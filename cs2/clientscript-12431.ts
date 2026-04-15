//
function script12431(int0: int): void {
    var int1 = script13539(int0);
    var int2 = script13541(int0);
    var int3 = script13544(int0);
    var int4 = script13549(int0);
    var int5 = script13548(int0);
    var int6 = script13540(int0);
    var int7 = script2730(int0);
    var int8 = 0;
    var int9 = 0;
    if (((varbitplayer_38842 == 1) || ((varbitplayer_27169 == 0) && (varbitplayer_60441 == 0)))) {
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int6);
    } else {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int6);
    };
    script2696(int6);
    script2696(int7);
    if (((int0 == 18) && (varbitplayer_38842 == 1))) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int6);
    } else if ((varbitplayer_36975 == 1)) {
        script12508(32, int1, int2, int3, int6);
        script13538(int4, int5, false, false, true);
    } else if ((script6578(int0) == 1)) {
        script12508(32, int1, int2, int3, int6);
        script13538(int4, int5, true, true, false);
    } else if ((((IF_GETWIDTH(int3) + IF_GETWIDTH(int2)) + 16) > (IF_GETWIDTH(IF_GETPARENTLAYER(int1)) - 4))) {
        script12508(32, int1, int2, int3, int6);
        script13538(int4, int5, false, false, true);
    } else {
        IF_SETPOSITION(0, 0, 1, 0, int1);
        IF_SETSIZE(4, 20, 1, 0, int1);
        IF_SETPOSITION(18, 0, 2, 0, int3);
        IF_SETHIDE(false, int2);
        IF_SETHIDE(false, int3);
        [int8, int9] = script13534(int0, 12874 as cs2enum, 0, script13542(int0), script13543(int0));
        IF_SETSIZE(int8, 0, 0, 1, int2);
        [int8, int9] = script13534(int0, 12986 as cs2enum, 0, script13545(int0), script13546(int0));
        IF_SETSIZE(int8, 0, 0, 1, int3);
        script13538(int4, int5, true, true, false);
    };
    script13537(int0);
    return;
}