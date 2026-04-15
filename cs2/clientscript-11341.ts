//
function script11341(int0: component, int1: unknown_int, int2: component, int3: component, int4: component, int5: component, int6: component): void {
    var int7 = (5 * 4);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    IF_SETHIDE(true, int2);
    IF_SETHIDE(true, int3);
    IF_SETHIDE(true, int4);
    IF_SETHIDE(true, int5);
    IF_SETHIDE(true, int6);
    var int11 = (varbitplayer_27697 * 4);
    switch (varbitplayer_27697) {
        case 0: {
            IF_SETHIDE(false, int2);
            int11 = (int11 + MIN(3, varbitplayer_18787));
            break;
        }
        case 1: {
            IF_SETHIDE(false, int3);
            int11 = (int11 + MIN(3, varbitplayer_18789));
            break;
        }
        case 2: {
            IF_SETHIDE(false, int4);
            if ((varbitplayer_27168 == 1)) {
                int11 = (int11 + MIN(2, varbitplayer_18791));
            } else {
                int11 = (int11 + MIN(3, varbitplayer_18791));
            };
            break;
        }
        case 3: {
            IF_SETHIDE(false, int5);
            int11 = (int11 + MIN(3, varbitplayer_53124));
            break;
        }
        case 4: {
            IF_SETHIDE(false, int6);
            int11 = (int11 + MIN(3, varbitplayer_36454));
            break;
        }
    };
    CC_DELETEALL(int0);
    var int12 = 20;
    var int13 = 20;
    var int14 = 3;
    var int15 = 3;
    var int16 = 22;
    var int17 = 0;
    var int18 = -1 as graphic;
    var string0 = "";
    var int19 = 0;
    if ((varbitplayer_38842 == 1)) {
        int12 = 40;
        int13 = 40;
        int16 = 48;
    };
    var int20 = -1;
    var int21 = -1;
    var int22 = -1;
    var int23 = -1;
    var int24 = -1;
    var int25 = -1;
    while ((int8 < int7)) {
        int9 = ((int8 / 4) + 1);
        [int18, string0] = script11343(int9, MODULO(int8, 4));
        if ((int18 != -1 as graphic)) {
            script8441(int0, int19, int14, int15, int12, int13, int18);
            if ((int10 != int9)) {
                [int20, int21, int22, int23, int24, int25] = script11342(int19);
                int10 = int9;
            };
            CC_SETONOP(callback(script8432, int0, int20, int21, int22, int23, int24, int25, int19));
            if ((strcmp("", string0) != 0)) {
                CC_SETOP(1, string0);
                CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                CC_SETONMOUSELEAVE(callback(script8805));
            };
            int19 = (int19 + 1);
            CC_CREATE(int0, 3, int19);
            CC_SETCOLOUR(16777215);
            CC_SETSIZE(int12, int13, 0, 0);
            CC_SETPOSITION(int14, int15, 0, 0);
            if ((int8 != int11)) {
                CC_SETHIDE(true);
            };
            int19 = (int19 + 1);
            if ((MODULO(++int17, 9) == 0)) {
                int14 = 3;
                int15 = (int15 + (int13 + 3));
            } else {
                int14 = (int14 + int16);
            };
        } else {
            CC_CREATE(int0, 5, int19);
            int19 = (int19 + 1);
            CC_CREATE(int0, 3, int19);
            int19 = (int19 + 1);
        };
        int8 = (int8 + 1);
    };
    return;
}