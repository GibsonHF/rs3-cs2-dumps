//
function script9946(): void {
    if ((varbitplayer_27169 == 0)) {
        script8390(18);
        return;
    };
    var int0 = script10405(18);
    var int1 = script10405(1019);
    var int2 = script10405(1003);
    var int3 = script10405(1032);
    var int4 = script10405(1033);
    var int5 = script10405(1009);
    var int6 = script10405(1038);
    var int7 = (IF_GETHEIGHT(comp(1477, 27)) - varclient_1037);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((IF_GETHIDE(struct_getparam(int2, 3503)) == false)) {
        int8 = IF_GETHEIGHT(struct_getparam(int2, 3503));
        if ((varbitplayer_27168 == 0)) {
            if ((varbitplayer_29138 > 0)) {
                int9 = IF_GETHEIGHT(struct_getparam(int3, 3503));
            };
            if ((varbitplayer_29139 > 0)) {
                int10 = IF_GETHEIGHT(struct_getparam(int4, 3503));
            };
        };
    };
    if ((varbitplayer_20187 == 1)) {
        int7 = MAX(int7, (IF_GETHEIGHT(struct_getparam(int1, 3503)) + int8));
    } else {
        int7 = MAX(int7, int8);
    };
    var int11 = 1;
    var int12 = script9947();
    if ((int12 == 1)) {
        int7 = (28 + 3);
        int11 = 0;
    };
    if ((((varclient_3693 == 1) || (script20655() == 1)) || (varbitplayer_27168 == 1))) {
        IF_SETHIDE(true, struct_getparam(int3, 3503));
        IF_SETHIDE(true, struct_getparam(int4, 3503));
        int9 = 0;
        int10 = 0;
    } else {
        if ((varbitplayer_29138 == 0)) {
            IF_SETHIDE(true, struct_getparam(int3, 3503));
            int9 = 0;
        } else {
            IF_SETHIDE(false, struct_getparam(int3, 3503));
        };
        if ((varbitplayer_29139 == 0)) {
            IF_SETHIDE(true, struct_getparam(int4, 3503));
            int10 = 0;
        } else {
            IF_SETHIDE(false, struct_getparam(int4, 3503));
        };
    };
    IF_SETPOSITION(0, 0, 0, 2, struct_getparam(int0, 3503));
    IF_SETSIZE(552, int7, 0, int11, struct_getparam(int0, 3503));
    int7 = IF_GETHEIGHT(struct_getparam(int0, 3503));
    var int13 = IF_GETWIDTH(comp(1477, 26));
    if ((int13 <= ((552 * 2) + script19630(0)))) {
        IF_SETPOSITION(0, ((int7 + int9) + int10), 0, 2, struct_getparam(int2, 3503));
        IF_SETPOSITION(0, (int7 + int10), 0, 2, struct_getparam(int3, 3503));
        IF_SETPOSITION(0, int7, 0, 2, struct_getparam(int4, 3503));
    } else {
        IF_SETPOSITION(0, (int9 + int10), 1, 2, struct_getparam(int2, 3503));
        IF_SETPOSITION(0, int10, 1, 2, struct_getparam(int3, 3503));
        IF_SETPOSITION(0, 0, 1, 2, struct_getparam(int4, 3503));
        IF_SETPOSITION(-135, ((int8 + int9) + int10), 1, 2, struct_getparam(int5, 3503));
        IF_SETPOSITION(135, ((int8 + int9) + int10), 1, 2, struct_getparam(int6, 3503));
    };
    if ((varbitplayer_20187 == 1)) {
        if ((varclient_41 == -1)) {
            IF_SETHIDE(true, struct_getparam(int1, 3503));
        } else {
            if ((int12 == 1)) {
                IF_SETPOSITION(0, (28 + IF_GETHEIGHT(script8071())), 0, 2, struct_getparam(int1, 3503));
            } else if ((int13 > ((552 * 2) + script19630(0)))) {
                IF_SETPOSITION(0, int7, 0, 2, struct_getparam(int1, 3503));
            } else {
                IF_SETPOSITION(0, (((int7 + int8) + int9) + int10), 0, 2, struct_getparam(int1, 3503));
            };
            IF_SETSIZE(552, 103, 0, 0, struct_getparam(int1, 3503));
            IF_SETHIDE(false, struct_getparam(int1, 3503));
        };
    } else {
        IF_SETHIDE(true, struct_getparam(int1, 3503));
    };
    var int14 = struct_getparam(int0, 3506);
    if ((CC_FIND(int14, 9) == 1)) {
        CC_SETDRAGRENDERBEHAVIOUR(3);
        CC_SETMOUSEOVERCURSOR(190);
        CC_SETDRAGGABLE(comp(1477, 27), -1);
        CC_SETDRAGDEADTIME(1);
        CC_SETDRAGDEADZONE(1);
        CC_SETONDRAG(callback(script9948, 18, -2147483646, 0));
        CC_SETONDRAGCOMPLETE(callback(script9948, 18, -2147483646, 1));
    };
    script8390(18);
    return;
}