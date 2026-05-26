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
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = 0;
    while ((int12 < 4)) {
        switch (int12) {
            case 1: {
                [int7, int8, int9, int10, int11] = [int4, 67108874, 67108896, 67108898, 67108897];
                break;
            }
            case 2: {
                [int7, int8, int9, int10, int11] = [int5, 67108876, 67108889, 67108891, 67108890];
                break;
            }
            case 3: {
                [int7, int8, int9, int10, int11] = [int6, 67108878, 67108882, 67108884, 67108883];
                break;
            }
            default: {
                [int7, int8, int9, int10, int11] = [int3, 67108872, 67108903, 67108905, 67108904];
                break;
            }
        };
        if ((int7 == 0)) {
            IF_SETHIDE(1, int8);
            int0 = (int0 + 1);
        } else {
            int2 = script488(int7);
            if ((int2 != -1)) {
                IF_SETHIDE(0, int8);
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
        IF_SETHIDE(1, 67108867);
        IF_SETHIDE(0, 67108868);
    } else if ((int0 == 3)) {
        IF_SETHIDE(0, 67108867);
        IF_SETHIDE(1, 67108868);
        if ((int3 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, 67108872);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108872);
        } else if ((int4 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, 67108874);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108874);
        } else if ((int5 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, 67108876);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108876);
        } else if ((int6 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, 67108878);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108878);
        };
    } else if ((int0 == 2)) {
        IF_SETHIDE(0, 67108867);
        IF_SETHIDE(1, 67108868);
        if ((int3 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, 67108872);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108872);
            int1 = (int1 + 45);
        };
        if ((int4 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, 67108874);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108874);
            int1 = (int1 + 45);
        };
        if ((int5 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, 67108876);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108876);
            int1 = (int1 + 45);
        };
        if ((int6 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, 67108878);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108878);
        };
    } else if ((int0 == 1)) {
        IF_SETHIDE(0, 67108867);
        IF_SETHIDE(1, 67108868);
        if ((int3 != 0)) {
            IF_SETPOSITION(0, 0, 1, 0, 67108872);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108872);
            int1 = (int1 + 45);
        };
        if ((int4 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, 67108874);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108874);
            int1 = (int1 + 45);
        };
        if ((int5 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, 67108876);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108876);
            int1 = (int1 + 45);
        };
        if ((int6 != 0)) {
            IF_SETPOSITION(0, int1, 1, 0, 67108878);
            IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108876);
        };
    } else {
        IF_SETHIDE(0, 67108867);
        IF_SETHIDE(1, 67108868);
        IF_SETPOSITION(0, 0, 1, 0, 67108872);
        IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108872);
        IF_SETPOSITION(0, 45, 1, 0, 67108874);
        IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108874);
        IF_SETPOSITION(0, 90, 1, 0, 67108876);
        IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108876);
        IF_SETPOSITION(0, 135, 1, 0, 67108878);
        IF_SETONMOUSEREPEAT(callback(script432, -2147483645), 67108878);
    };
    return;
}