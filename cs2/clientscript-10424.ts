//
function script10424(int0: component, int1: component, int2: component, int3: struct, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: int, int12: int, int13: boolean, int14: unknown_int, int15: cs2enum): void {
    var int16 = struct_getparam(int3, 7251);
    var int17 = struct_getparam(int3, 7252);
    var int18 = struct_getparam(int3, 7253);
    var int19 = struct_getparam(int3, 7254);
    var int20 = struct_getparam(int3, 7255);
    var int21 = struct_getparam(int3, 4403);
    var int22 = struct_getparam(int3, 7256);
    var int23 = (int8 + (int10 / 2));
    var int24 = 0;
    var int25 = int9;
    var int26 = int10;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    var int31 = IF_GETNEXTSUBID(int0);
    if (((int1 != comp(-1, 65535)) && (IF_FIND(int1) == 1))) {
        cc_setparam(7250, -1);
    };
    if ((varclient_6477 == 1)) {
        CANCEL_INTERFACE_DRAG();
        varclient_6477 = 0;
    };
    var int6 = (int6 - int4);
    if ((int19 != -1 as struct)) {
        [int28, int27] = script10426(int19);
        int24 = (int28 + 5);
        int25 = (int25 - int24);
        script9796(int0, int19, int7, (int23 - (int27 / 2)), int13);
        if (((CC_FIND(int0, (int31 + 0)) == 1) && (int13 == false))) {
            CC_SETOP(1, "Decrease");
            CC_SETONOP(callback(script10447, int0, int1, int2, int31, int11, int12, -1, int4, int5, int14, int15));
        };
    } else {
        CC_CREATE(int0, 4, (int31 + 0));
    };
    if ((int20 != -1 as struct)) {
        [int28, int27] = script10426(int20);
        int29 = struct_getparam(int3, 7257);
        script9799(int0, int20, (int7 + (int9 - int29)), (int23 - (int27 / 2)), int29, "    ", int13);
        int29 = (int29 + 5);
        int25 = (int25 - int29);
        CC_CREATE(int0, 5, (int31 + 6));
    } else {
        CC_CREATE(int0, 4, (int31 + 1));
        CC_CREATE(int0, 4, (int31 + 2));
        CC_CREATE(int0, 4, (int31 + 3));
        CC_CREATE(int0, 4, (int31 + 4));
        CC_CREATE(int0, 4, (int31 + 5));
        CC_CREATE(int0, 4, (int31 + 6));
    };
    if ((int18 != -1 as struct)) {
        [int28, int27] = script10426(int18);
        int25 = (int25 - (int28 + 5));
        script9796(int0, int18, (int7 + ((int9 - int29) - int28)), (int23 - (int27 / 2)), int13);
        if (((CC_FIND(int0, (int31 + 7)) == 1) && (int13 == false))) {
            CC_SETOP(1, "Increase");
            CC_SETONOP(callback(script10447, int0, int1, int2, int31, int11, int12, 1, int4, int5, int14, int15));
        };
    } else {
        CC_CREATE(int0, 4, (int31 + 7));
    };
    [int28, int27] = script10426(int16);
    script9799(int0, int16, (int7 + int24), (int23 - (int27 / 2)), int25, "", int13);
    [int28, int27] = script10426(int17);
    script9799(int0, int17, (int7 + int24), (int23 - (int27 / 2)), (int25 / 2), "", int13);
    [int28, int27] = script10426(int22);
    int30 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 4, int30);
    CC_SETSIZE(int25, int27, 0, 0);
    CC_SETPOSITION((int7 + int24), (int23 - (int27 / 2)), 0, 0);
    if ((int13 == false)) {
        CC_SETONCLICK(callback(script10448, int0, int1, int2, int31, int11, int12, -2147483647, int25, int4, int5, int14, int15));
    };
    script9796(int0, int22, (int7 + (int24 + (int25 / 2))), (int23 - (int27 / 2)), int13);
    if (((int13 == false) && (CC_FIND(int0, (int31 + 19)) == 1))) {
        cc_setparam(7249, int6);
        CC_SETDRAGRENDERBEHAVIOUR(1);
        CC_SETDRAGGABLE(int0, int30);
        CC_SETNOCLICKTHROUGH(true);
        CC_SETONDRAG(callback(script10445, int0, int1, int2, int31, int11, int12, -2147483647, (int25 - int28), int4, int5, int14, int15));
        CC_SETONDRAGCOMPLETE(callback(script10446, int0, int1, int2, int31, int11, int12, -2147483647, (int25 - int28), int4, int5, int14, int15));
    };
    if ((int1 != comp(-1, 65535))) {
        IF_CREATECHILD(4, int11, int12, int1);
        CC_SETSIZE(1, 1, 0, 0);
        CC_SETPOSITION(-1, -1, 0, 0);
        if ((int13 == false)) {
            CC_SETOP(1, "Select");
        };
    };
    script10602(int0, -1, int31, int4, int5, int6, int15);
    return;
}