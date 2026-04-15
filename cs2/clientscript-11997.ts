//
function script11997(int0: component, int1: component, int2: component, int3: struct): void {
    var int4 = IF_GETWIDTH(IF_GETLAYER(int0));
    var int5 = IF_GETHEIGHT(IF_GETLAYER(int0));
    var int6 = script6431();
    if (((int0 == struct_getparam(int3, 8136)) || (int0 == struct_getparam(int3, 8131)))) {
        if ((int6 == true)) {
            IF_SETHIDE(true, int0);
        } else {
            IF_SETHIDE(false, int0);
            if ((int0 == struct_getparam(int3, 8136))) {
                IF_SETSIZE(24, 24, 0, 0, int0);
                IF_SETPOSITION((24 + SCALE(3, 2, 4)), 4, 2, 2, int0);
            } else {
                IF_SETSIZE(24, 24, 0, 0, int0);
                IF_SETPOSITION(4, 4, 2, 2, int0);
            };
        };
    };
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    int4 = IF_GETWIDTH(int0);
    int5 = IF_GETHEIGHT(int0);
    var int7 = -1;
    if ((int3 != 37672 as struct)) {
        if (((int6 == false) && (varbitplayer_27169 == 1))) {
            if (((int0 == struct_getparam(int3, 8136)) || (int0 == struct_getparam(int3, 8131)))) {
                script11624(int1, int2, 28749 as struct, 0, 0, 0, 1);
            } else {
                script13980(int1, int2, 28554 as struct, 0, 0, int4, 0, false, "");
            };
        } else {
            script10410(int1, int2, 28557 as struct, 0, 0, int4, int5, 0, false, "");
        };
    };
    return;
}