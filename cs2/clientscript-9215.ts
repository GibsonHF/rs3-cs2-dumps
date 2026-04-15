//
function script9215(int0: int, int1: int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = -1 as obj;
    var int8 = -1;
    var int9 = -1 as obj;
    var int10 = -1;
    [int2, int2, int2, int3, int2, int2] = script8682(comp(1473, 0));
    [int2, int2, int2, int2, int2, int4, int2, int2, int2, int2, int2, int2] = script8472(comp(1464, 0));
    [int2, int2, int2, int5, int2, int2] = script8682(comp(1474, 3));
    [int2, int2, int2, int2, int2, int6, int2, int2, int2, int2, int2, int2] = script8472(comp(1462, 3));
    var int11 = script14074(93 as inv);
    var int12 = script14074(94 as inv);
    if ((((script6352(int11) == 1) && (CC_FIND(int11, int1) == 1)) || (((script6352(int3) == 1) && (CC_FIND(int3, int1) == 1)) || ((script6352(int5) == 1) && (CC_FIND(int5, int1) == 1))))) {
        int7 = CC_GETINVOBJECT();
        int8 = CC_GETINVCOUNT();
    };
    if ((((script6352(int12) == 1) && (CC_FIND(int12, int0) == 1)) || (((script6352(int4) == 1) && (CC_FIND(int4, int0) == 1)) || ((script6352(int6) == 1) && (CC_FIND(int6, int0) == 1))))) {
        int9 = CC_GETINVOBJECT();
        int10 = CC_GETINVCOUNT();
    };
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    if (((int9 != -1 as obj) && (OC_STACKABLE(int9) == 1))) {
        int15 = INV_TOTAL(94 as inv, int9);
        int16 = INV_TOTAL(93 as inv, int9);
        if ((int16 > 0)) {
            if (((2147483647 - int16) < int15)) {
                int16 = 2147483647;
            } else {
                int16 = (int16 + int15);
            };
            int13 = script9250(93 as inv, int9);
            if ((CC_FIND(int3, int13) == 1)) {
                script9230(int9, int16);
            };
            if ((CC_FIND(int5, int13) == 1)) {
                script9230(int9, int16);
            };
            if (((int11 != comp(-1, 65535)) && (CC_FIND(int11, int13) == 1))) {
                script9240(int11, cc_getparam(3819), 93 as inv, int9, int16, 1, "", "", "", "", "", "", "", "", "", "");
            };
            if ((CC_FIND(int4, int0) == 1)) {
                script9222(-1 as obj, 0);
            };
            if ((CC_FIND(int6, int0) == 1)) {
                script9222(-1 as obj, 0);
            };
            if (((int12 != comp(-1, 65535)) && (CC_FIND(int12, int0) == 1))) {
                script9222(-1 as obj, 0);
            };
        };
    };
    if (((int7 != -1 as obj) && (OC_STACKABLE(int7) == 1))) {
        int15 = INV_TOTAL(94 as inv, int7);
        int16 = INV_TOTAL(93 as inv, int7);
        if ((int15 > 0)) {
            if (((2147483647 - int15) < int16)) {
                int15 = 2147483647;
            } else {
                int15 = (int15 + int16);
            };
            int14 = script9250(94 as inv, int7);
            if ((CC_FIND(int4, int14) == 1)) {
                script9222(int9, int16);
            };
            if ((CC_FIND(int6, int14) == 1)) {
                script9222(int9, int16);
            };
            if (((int12 != comp(-1, 65535)) && (CC_FIND(int12, int14) == 1))) {
                script9222(int9, int16);
            };
            if ((CC_FIND(int3, int1) == 1)) {
                script9230(-1 as obj, 0);
            };
            if ((CC_FIND(int5, int1) == 1)) {
                script9230(-1 as obj, 0);
            };
            if (((int11 != comp(-1, 65535)) && (CC_FIND(int11, int1) == 1))) {
                script9240(int11, cc_getparam(3819), 93 as inv, -1 as obj, 0, 1, "", "", "", "", "", "", "", "", "", "");
            };
        };
    };
    if (((int16 == 0) || (int15 == 0))) {
        if ((CC_FIND(int3, int1) == 1)) {
            script9230(int9, int10);
        };
        if ((CC_FIND(int5, int1) == 1)) {
            script9230(int9, int10);
        };
        if (((int11 != comp(-1, 65535)) && (CC_FIND(int11, int1) == 1))) {
            script9240(int11, cc_getparam(3819), 93 as inv, int9, int10, 1, "", "", "", "", "", "", "", "", "", "");
        };
        if ((CC_FIND(int4, int0) == 1)) {
            script9222(int7, int8);
        };
        if ((CC_FIND(int6, int0) == 1)) {
            script9222(int7, int8);
        };
        if (((int12 != comp(-1, 65535)) && (CC_FIND(int12, int0) == 1))) {
            script9222(int7, int8);
        };
    };
    return;
}