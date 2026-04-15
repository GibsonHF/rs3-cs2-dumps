//
function script9949(int0: int, int1: unknown_int): void {
    var int2 = script10405(18);
    var int3 = script10405(1019);
    var int4 = script10405(1003);
    var int5 = script10405(1032);
    var int6 = script10405(1033);
    var int0 = (IF_GETHEIGHT(comp(1477, 27)) - int0);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    int7 = IF_GETHEIGHT(struct_getparam(int4, 3503));
    if (((script20655() == 1) || (varbitplayer_27168 == 1))) {
        int8 = 0;
        int9 = 0;
    } else {
        if ((varbitplayer_29138 > 0)) {
            int8 = IF_GETHEIGHT(struct_getparam(int5, 3503));
        };
        if ((varbitplayer_29139 > 0)) {
            int9 = IF_GETHEIGHT(struct_getparam(int6, 3503));
        };
    };
    if ((varbitplayer_20187 == 1)) {
        int0 = MAX(int0, (((IF_GETHEIGHT(struct_getparam(int3, 3503)) + int7) + int8) + int9));
    } else {
        int0 = MAX(int0, ((int7 + int8) + int9));
    };
    IF_SETSIZE(552, int0, 0, 1, struct_getparam(int2, 3503));
    int0 = IF_GETHEIGHT(struct_getparam(int2, 3503));
    var int10 = 2;
    int10 = script8503(comp(137, 86), 0, int10);
    script8504(18, int10);
    script8390(18);
    if ((int1 == 1)) {
        IF_SETSIZE(0, 24, 1, 1, comp(137, 3));
        script8491(18);
    };
    var int11 = IF_GETWIDTH(comp(1477, 26));
    if ((int11 <= ((552 * 2) + script19630(0)))) {
        IF_SETPOSITION(0, ((int0 + int8) + int9), 0, 2, struct_getparam(int4, 3503));
        IF_SETPOSITION(0, (int0 + int9), 0, 2, struct_getparam(int5, 3503));
        IF_SETPOSITION(0, int0, 0, 2, struct_getparam(int6, 3503));
    };
    if ((varbitplayer_20187 == 1)) {
        if ((int11 > ((552 * 2) + script19630(0)))) {
            IF_SETPOSITION(0, int0, 0, 2, struct_getparam(int3, 3503));
        } else {
            IF_SETPOSITION(0, (((int0 + int7) + int8) + int9), 0, 2, struct_getparam(int3, 3503));
        };
        IF_SETSIZE(552, 103, 0, 0, struct_getparam(int3, 3503));
        IF_SETHIDE(false, struct_getparam(int3, 3503));
    };
    return;
}