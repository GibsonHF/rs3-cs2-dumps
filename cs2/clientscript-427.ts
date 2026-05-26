//
function script427(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1;
    var int3 = varbitplayer_5415;
    var int4 = varbitplayer_5416;
    var int5 = varbitplayer_5417;
    var int6 = varbitplayer_5418;
    if ((varclient_1388 == 1)) {
        int3 = 1;
        int4 = 3;
        int5 = 5;
        int6 = 6;
    };
    var int7 = 0;
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    var int11 = comp(-1, 65535);
    var int12 = 0;
    while ((int12 < 4)) {
        switch (int12) {
            case 1: {
                [int7, int8, int9, int10, int11] = [int4, comp(1024, 10), comp(1024, 32), comp(1024, 34), comp(1024, 33)];
                break;
            }
            case 2: {
                [int7, int8, int9, int10, int11] = [int5, comp(1024, 12), comp(1024, 25), comp(1024, 27), comp(1024, 26)];
                break;
            }
            case 3: {
                [int7, int8, int9, int10, int11] = [int6, comp(1024, 14), comp(1024, 18), comp(1024, 20), comp(1024, 19)];
                break;
            }
            default: {
                [int7, int8, int9, int10, int11] = [int3, comp(1024, 8), comp(1024, 39), comp(1024, 41), comp(1024, 40)];
                break;
            }
        };
        if ((int7 == 0)) {
            IF_SETHIDE(true, int8);
            int0 = (int0 + 1);
        } else {
            int2 = script488(int7);
            if ((int2 != -1)) {
                IF_SETHIDE(false, int8);
                IF_SETOPBASE(struct_getparam(int2, 1150), int8);
                IF_SETTEXT(struct_getparam(int2, 1150), int9);
                IF_SETGRAPHIC(struct_getparam(int2, 1153), int10);
                IF_SETTEXT(inttostring(struct_getparam(int2, 1154), 10), int11);
            };
            if ((int7 == 9)) {
                IF_SETOP(1, "Cast", int8);
            };
        };
        int12 = (int12 + 1);
    };
    if ((int0 == 4)) {
        IF_SETHIDE(true, comp(1024, 3));
        IF_SETHIDE(false, comp(1024, 4));
    } else if ((int0 == 3)) {
        IF_SETHIDE(false, comp(1024, 3));
        IF_SETHIDE(true, comp(1024, 4));
        if ((int3 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, comp(1024, 8));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 8));
        } else if ((int4 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, comp(1024, 10));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 10));
        } else if ((int5 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, comp(1024, 12));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 12));
        } else if ((int6 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, comp(1024, 14));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 14));
        };
    } else if ((int0 == 2)) {
        IF_SETHIDE(false, comp(1024, 3));
        IF_SETHIDE(true, comp(1024, 4));
        if ((int3 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, comp(1024, 8));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 8));
            int1 = (int1 + 45);
        };
        if ((int4 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, comp(1024, 10));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 10));
            int1 = (int1 + 45);
        };
        if ((int5 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, comp(1024, 12));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 12));
            int1 = (int1 + 45);
        };
        if ((int6 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, comp(1024, 14));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 14));
        };
    } else if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1024, 3));
        IF_SETHIDE(true, comp(1024, 4));
        if ((int3 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, comp(1024, 8));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 8));
            int1 = (int1 + 45);
        };
        if ((int4 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, comp(1024, 10));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 10));
            int1 = (int1 + 45);
        };
        if ((int5 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, comp(1024, 12));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 12));
            int1 = (int1 + 45);
        };
        if ((int6 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, comp(1024, 14));
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 12));
        };
    } else {
        IF_SETHIDE(false, comp(1024, 3));
        IF_SETHIDE(true, comp(1024, 4));
        IF_SETPOSITION(0, 0, 1, 0, comp(1024, 8));
        IF_SETONMOUSEREPEAT(callback(script432, -2147483645), comp(1024, 8));
        IF_SETPOSITION(0, 45, 1, 0, 67108874);
        IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108874);
        IF_SETPOSITION(0, 90, 1, 0, 67108876);
        IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108876);
        IF_SETPOSITION(0, 135, 1, 0, 67108878);
        IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108878);
    };
    return;
}