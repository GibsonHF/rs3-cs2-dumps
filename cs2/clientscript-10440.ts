//
function script10440(int0: component, int1: int, int2: int, int3: int, int4: unknown_int, int5: cs2enum, int6: int): int {
    if ((((varplayer_4734 != int5) || (script13128(int0, varplayer_4735) == 1)) || ((int4 == 1) && (varplayer_4736 != int1)))) {
        script10444();
        return -1;
    };
    var int7 = comp(1477, 890);
    switch (IF_GETTOP()) {
        case 906: {
            int7 = comp(906, 159);
            break;
        }
        case 744: {
            int7 = comp(744, 349);
            break;
        }
        default: {
            int7 = comp(1477, 890);
            break;
        }
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = GET_MOUSEX();
    var int13 = GET_MOUSEY();
    var int14 = true;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    if ((IF_FIND(int7) == 1)) {
        int14 = cc_getparam(4514);
        int15 = CC_GETX();
        int16 = CC_GETY();
        int17 = CC_GETWIDTH();
        int18 = CC_GETHEIGHT();
    };
    if ((((int4 == 0) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        if ((script6351() == 0)) {
            script10444();
            return -1;
        };
        [int8, int9, int10, int11] = [script6355(), script6356(), CC_GETHEIGHT(), CC_GETWIDTH()];
        [int19, int20, int22, int21] = [int8, int9, int10, int11];
        if ((script6431() == true)) {
            int19 = (int19 - 20);
            int21 = (int21 + (20 + 60));
            int20 = (int20 - 150);
            int22 = (int22 + (150 + 150));
        };
        if (((int4 == 0) && (int3 == -1))) {
            switch (int0) {
                case 33882355:
                case 33882414:
                case 33882334:
                case 86048873: {
                    int10 = 30;
                    break;
                }
                default: {
                    int10 = 24;
                    break;
                }
            };
        };
        if ((int3 != -1)) {
            if ((((((int12 < int19) || (int12 >= (int19 + int21))) || (int13 < int20)) || (int13 >= (int20 + int22))) && ((((int12 < int15) || (int12 >= (int15 + int17))) || (int13 < int16)) || (int13 >= (int16 + int18))))) {
                var int6 = (int6 + 1);
            };
        } else if ((int14 == true)) {
            if (((((int12 < int19) || (int12 >= (int19 + int21))) || (int13 < int20)) || (int13 >= ((int20 + int22) + int2)))) {
                int6 = (int6 + 1);
            };
        } else if (((((int12 < int19) || (int12 >= (int19 + int21))) || (int13 < (int20 - int2))) || (int13 >= (int20 + int22)))) {
            int6 = (int6 + 1);
        };
        if ((int6 >= 50)) {
            script10444();
            return -1;
        };
    } else {
        script10444();
        return -1;
    };
    var int23 = script10082();
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    [int24, int25, int26, int27] = script14244();
    var int28 = (((int27 - int9) - int10) - 5);
    if ((int28 >= MIN(((int23 * 4) + 8), int2))) {
        var [int14, int2] = [true, MIN(int2, int28)];
    } else if ((((int9 - int25) - 5) > int28)) {
        [int14, int2] = [false, MIN(int2, ((int9 - int25) + int10))];
    } else {
        [int14, int2] = [true, MIN(int2, int28)];
    };
    IF_SETHIDE(false, int7);
    if ((int3 != -1)) {
        IF_SETSIZE(int3, int2, 0, 0, int7);
    } else {
        IF_SETSIZE(int11, int2, 0, 0, int7);
    };
    IF_SETONTIMER(callback(script10439, int0, int1, int2, int3, int4, int5, int6), int7);
    if ((int14 == 1)) {
        IF_SETPOSITION(int8, (int9 + int10), 0, 0, int7);
    } else {
        IF_SETPOSITION(int8, (int9 - int2), 0, 0, int7);
    };
    if ((IF_FIND(int7) == 1)) {
        if ((int3 != -1)) {
            script137();
        };
        cc_setparam(4514, int14);
        cc_setparam(4516, int0);
        cc_setparam(4518, int1);
        cc_setparam(4517, int5);
        cc_setparam(4515, 1);
    };
    return int2;
}