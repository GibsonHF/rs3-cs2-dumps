//
function script8304(int0: int, int1: boolean): void {
    if (((script8874() == 0) && (int0 != 1008))) {
        script8306();
        return;
    };
    var int2 = script10405(int0);
    var int3 = struct_getparam(int2, 3494);
    var int4 = struct_getparam(int2, 3503);
    var int5 = struct_getparam(int2, 3509);
    if ((int1 == false)) {
        IF_SETHIDE(int1, struct_getparam(21301 as struct, 3503));
    };
    var int6 = IF_GETX(int4);
    var int7 = IF_GETY(int4);
    var int8 = IF_GETWIDTH(int4);
    var int9 = IF_GETHEIGHT(int4);
    var int10 = script10405(varclient_3466);
    var int11 = script8418(int10, 0);
    var int12 = struct_getparam(int10, 3494);
    var int13 = comp(-1, 65535);
    var int14 = comp(-1, 65535);
    var int15 = -1;
    var int16 = 0;
    var int17 = script8309(int0);
    if (((varclient_4105 != -1) && ((int17 != 1) || ((int17 == 1) && (varclient_4105 != varclient_3466))))) {
        script2015(int0);
    };
    var int18 = 1;
    switch (int17) {
        case 3: {
            script8323(int0, 1);
            break;
        }
        case 1: {
            int13 = struct_getparam(int10, 3503);
            int14 = struct_getparam(int10, 3509);
            int16 = ((varclient_4107 + IF_GETSCROLLX(int5)) - IF_GETSCROLLX(int14));
            if ((varclient_4105 != -1)) {
                script2015(int0);
            };
            int15 = script1849(int11, int13, int14, struct_getparam(int11, 3578), int16);
            script8356(varclient_3466, int0, int15, 1, 1);
            IF_SENDTOFRONT(int4);
            script8157(int0);
            break;
        }
        case 2: {
            [int6, int7, int8, int9] = script8717(varclient_3466);
            IF_SETHIDE(false, struct_getparam(int2, 3503));
            IF_SETHIDE(false, struct_getparam(int10, 3503));
            script8387(script8717(int0), varclient_3466);
            script8387(int6, int7, int8, int9, int0);
            script8705(varclient_3466);
            script6739(7);
            break;
        }
        case -1: {
            script8307(int0, 1);
            script8157(int0);
            break;
        }
        default: {
            [int6, int7, int8, int9, int18] = script8382(int6, int7, int8, int9, int0, 1, 1);
            if ((int18 == 0)) {
                script8307(int0, 1);
            } else {
                script8387(int6, int7, int8, int9, int0);
                script8388(int0);
            };
            break;
        }
    };
    script8305(int0);
    if ((int18 == 1)) {
        script8731();
    };
    if (((struct_getparam(int2, 6643) == true) && (script6354(struct_getparam(int2, 3514)) == 1))) {
        script8268(int0, 1);
    };
    script9690(int0);
    return;
}