//
function script13509(int0: int, int1: component, int2: unknown_int, int3: int, int4: int, int5: unknown_int): void {
    if (((script8874() == 0) && (int0 != 1008))) {
        script8306();
        return;
    };
    varclient_3467 = int0;
    var int6 = script10405(int0);
    var int7 = struct_getparam(int6, 3503);
    var int8 = struct_getparam(int6, 3506);
    var int9 = struct_getparam(int6, 3509);
    var int10 = struct_getparam(int6, 3508);
    var int11 = struct_getparam(int6, 3510);
    var int12 = script1886(int0);
    var int13 = 0;
    var int14 = 0;
    if ((int9 != comp(-1, 65535))) {
        int13 = IF_GETSCROLLWIDTH(int9);
        int14 = IF_GETSCROLLX(int9);
    };
    if ((varclient_2832 <= 0)) {
        script6739(1);
        varclient_2832 = 1;
        script3380(0);
        IF_SETNOCLICKTHROUGH(0, int7);
        script3415(false, int8);
    };
    var int15 = 1;
    IF_SENDTOFRONT(int7);
    IF_SETONMOUSEREPEAT(callback(), int8);
    var int16 = 0;
    var int17 = 0;
    [int16, int17] = script8405(int12);
    if ((CC_FIND(int1, int2) == 1)) {
        int16 = ((int16 + CC_GETX()) - CC_GETSCROLLX());
        int17 = operator("-", CC_GETSCROLLY((int17 + CC_GETY())));
    };
    var int18 = int1;
    var int19 = 0;
    if ((int5 == 1)) {
        while (((int18 != int7) && (int18 != comp(-1, 65535)))) {
            int16 = ((int16 + IF_GETX(int18)) - IF_GETSCROLLX(int18));
            int17 = ((int17 + IF_GETY(int18)) - IF_GETSCROLLY(int18));
            int18 = IF_GETPARENTLAYER(int18);
            int19 = (int19 + 1);
        };
    };
    var int20 = (int3 - int16);
    var int21 = (int4 - int17);
    var int22 = IF_GETWIDTH(int7);
    var int23 = IF_GETHEIGHT(int7);
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    [int24, int25] = script8405(int12);
    [int22, int23] = script8716(int0);
    var int28 = struct_getparam(int6, 3494);
    if ((int28 != -1 as struct)) {
        [int26, int27] = script20539(struct_getparam(int6, 3494));
        if ((int22 < int26)) {
            int22 = MAX(IF_GETWIDTH(int7), int26);
        };
        if ((int23 < int27)) {
            int23 = MAX(IF_GETHEIGHT(int7), int27);
        };
    } else if (((int22 <= 0) || (int23 <= 0))) {
        int22 = IF_GETWIDTH(int7);
        int23 = IF_GETHEIGHT(int7);
    };
    var int29 = ((int24 + IF_GETWIDTH(int12)) - IF_GETWIDTH(int7));
    var int30 = ((int25 + IF_GETHEIGHT(int12)) - IF_GETHEIGHT(int7));
    int20 = MAX(int24, MIN(int20, int29));
    int21 = MAX(int25, MIN(int21, int30));
    IF_SETPOSITION(int20, int21, 0, 0, int7);
    IF_SETSIZE(int22, int23, 0, 0, int7);
    script8308(int0, script8717(int0), int20, int21, IF_GETWIDTH(int7), IF_GETHEIGHT(int7));
    var int31 = script10405(varclient_3466);
    var int32 = script8418(int31, 0);
    var int33 = struct_getparam(int31, 3503);
    var int34 = struct_getparam(int31, 3509);
    var int35 = -1;
    IF_SETHIDE(false, int7);
    script8691(script8717(int0));
    var int36 = 0;
    var int37 = 0;
    var int38 = script8309(int0);
    if (((varclient_4105 != -1) && ((int38 != 1) || ((int38 == 1) && (varclient_4105 != varclient_3466))))) {
        script2015(int0);
        int13 = IF_GETSCROLLWIDTH(int9);
        int14 = IF_GETSCROLLX(int9);
        int37 = 1;
    };
    switch (int38) {
        case 3: {
            [int22, int23] = [-1, -1];
            script8322(int0, false, 18825 as graphic);
            break;
        }
        case 1: {
            if (((int22 != IF_GETWIDTH(int33)) || (int23 != IF_GETHEIGHT(int33)))) {
                IF_SETSIZE(IF_GETWIDTH(int33), IF_GETHEIGHT(int33), 0, 0, int7);
                int37 = 1;
            };
            if ((varclient_4105 == -1)) {
                if ((varclient_4107 == -1)) {
                    varclient_4107 = ((0 - struct_getparam(int32, 3578)) / 2);
                };
                varclient_4105 = varclient_3466;
                if ((script8374(int9) == 1)) {
                    int37 = 1;
                    script8378(0, int0);
                };
                script2011(int0, varclient_4105);
                int13 = IF_GETSCROLLWIDTH(int9);
                int14 = IF_GETSCROLLX(int9);
                IF_SENDTOFRONT(int7);
                IF_SENDTOBACK(int33);
            };
            IF_SETPOSITION(IF_GETX(int33), IF_GETY(int33), 0, 0, int7);
            IF_SETSCROLLSIZE(int13, IF_GETSCROLLHEIGHT(int9), int9);
            IF_SETSCROLLPOS(int14, IF_GETSCROLLY(int9), int9);
            script2012(int0, varclient_4105);
            script8322(int0, true, 18825 as graphic);
            break;
        }
        case 2: {
            [int20, int21, int22, int23] = script8717(varclient_3466);
            int36 = 1;
            script8322(int0, true, 18825 as graphic);
            break;
        }
        case -1: {
            script8322(int0, false, 18824 as graphic);
            break;
        }
        default: {
            [int20, int21, int22, int23, int15] = script8382(int20, int21, int22, int23, int0, 1, 1);
            script8322(int0, true, 18825 as graphic);
            break;
        }
    };
    if ((int9 != comp(-1, 65535))) {
        IF_SETSCROLLSIZE(int13, IF_GETSCROLLHEIGHT(int9), int9);
        IF_SETSCROLLPOS(int14, IF_GETSCROLLY(int9), int9);
    };
    if ((int37 == 1)) {
        script8390(int0);
    };
    if ((int36 == 1)) {
        script8692();
        script8693(script8717(int0));
    } else {
        script8694();
    };
    if ((((int22 < 0) || (int23 < 0)) || (int38 == -1))) {
        script8689();
    } else {
        script8688(int20, int21, int22, int23);
    };
    return;
}