//
function script11398(int0: int): void {
    var int1 = script11401();
    if ((int1 == -1 as cs2enum)) {
        script11399();
        return;
    };
    if ((int0 == -1)) {
        var int0 = (varplayer_5406 - 1);
    };
    if ((int0 < 0)) {
        script11399();
        return;
    };
    var int2 = enum_getvalue(0, 33, int1, int0);
    if ((int2 == -1 as obj)) {
        script11399();
        return;
    };
    CC_DELETEALL(comp(1621, 16));
    var int3 = script11400(int0);
    var int4 = -1 as obj;
    if ((int3 == 0)) {
        int4 = script11404(int2);
        if ((int4 != -1 as obj)) {
            int2 = int4;
        };
    } else {
        int4 = script11403(int2);
        if ((int4 != -1 as obj)) {
            int2 = int4;
        };
    };
    var int5 = -1 as obj;
    var int6 = -1 as obj;
    var int7 = -1 as obj;
    var int8 = -1 as obj;
    var int9 = -1 as obj;
    var int10 = -1 as obj;
    var int11 = -1 as obj;
    var int12 = -1 as obj;
    var int13 = -1 as obj;
    [int5, int6, int7, int8, int9, int10, int11, int12, int13] = script11405(int2);
    var int14 = 0;
    var int15 = 9;
    var int16 = 8;
    var int17 = 5;
    var int18 = IF_GETWIDTH(comp(1621, 16));
    var int19 = -1 as obj;
    var int20 = 1;
    var int21 = false;
    var string0 = "";
    var int22 = 40;
    var int23 = 36;
    var int24 = 36;
    var int25 = 32;
    if ((script6431() == true)) {
        int22 = 44;
        int23 = 44;
        int24 = 44;
        int25 = 39;
    };
    while ((int14 < int15)) {
        switch (int14) {
            case 0: {
                int19 = int5;
                break;
            }
            case 1: {
                int19 = int6;
                break;
            }
            case 2: {
                int19 = int7;
                break;
            }
            case 3: {
                int19 = int8;
                break;
            }
            case 4: {
                int19 = int9;
                break;
            }
            case 5: {
                int19 = int10;
                break;
            }
            case 6: {
                int19 = int11;
                break;
            }
            case 7: {
                int19 = int12;
                break;
            }
            case 8: {
                int19 = int13;
                break;
            }
        };
        CC_CREATE(comp(1621, 16), 5, int14);
        if ((int19 != -1 as obj)) {
            if ((int3 == 0)) {
                int4 = script11404(int19);
            } else {
                int4 = script11403(int19);
            };
            if ((int4 != -1 as obj)) {
                int19 = int4;
            };
            if (((int16 + int22) > int18)) {
                int16 = 8;
                int17 = (int17 + int23);
            };
            CC_SETSIZE(int24, int25, 0, 0);
            CC_SETPOSITION(int16, int17, 0, 0);
            CC_SETOBJECT_NONUM(int19, 1);
            script14738(int19);
            int16 = (int16 + int22);
            if (((int3 == 0) && (INV_TOTAL(93 as inv, int19) == 0))) {
                int20 = 0;
            };
        };
        int14 = (int14 + 1);
    };
    if ((int3 == 0)) {
        int4 = script11404(int2);
        if ((int4 != -1 as obj)) {
            int2 = int4;
        };
        IF_SETTEXT(OC_NAME(int2), comp(1621, 4));
        IF_SETTEXT("The following items are part of this set:", comp(1621, 15));
        string0 = "Deposit";
        if ((varbitplayer_27926 == 0)) {
            int21 = true;
        } else if ((int20 == 0)) {
            int21 = true;
        } else {
            int21 = false;
        };
    } else {
        int4 = script11403(int2);
        if ((int4 != -1 as obj)) {
            int2 = int4;
        };
        IF_SETTEXT(OC_NAME(int2), comp(1621, 4));
        IF_SETTEXT("The following items are part of this set:", comp(1621, 15));
        string0 = "Withdraw";
        if ((varbitplayer_27926 == 0)) {
            int21 = true;
        } else {
            int21 = false;
        };
    };
    script13971(comp(1621, 37), comp(1621, 38), 28553 as struct, string0, int21);
    return;
}