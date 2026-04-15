//
function script2012(int0: int, int1: int): void {
    var int2 = script10405(int1);
    var int3 = struct_getparam(int2, 3509);
    var int4 = script8374(int3);
    var int5 = script10405(int0);
    var int6 = script8418(int2, 0);
    var int7 = struct_getparam(int5, 3503);
    var int8 = struct_getparam(int5, 3509);
    var int9 = struct_getparam(int5, 3510);
    var int10 = (script8374(int8) - int4);
    var int11 = struct_getparam(int6, 3578);
    var int12 = MIN(script1849(int6, int7, int8, int11, varclient_4107), int4);
    var int13 = ((MAX(0, MIN(script8403(int8), IF_GETWIDTH(int8))) + varclient_4107) + IF_GETSCROLLX(int8));
    int13 = MAX(0, int13);
    int13 = MIN(int13, (MAX(IF_GETWIDTH(int8), IF_GETSCROLLWIDTH(int8)) - (int10 * int11)));
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    if ((varclient_4106 != -1)) {
        if ((varclient_4106 == varclient_3466)) {
            int17 = 1;
        };
        varclient_4106 = -1;
    };
    if ((struct_getparam(int6, 8296) == 2)) {
        script20536(int8, int6, int12, int10, int17, int18);
        return;
    };
    while (((CC_FIND(int8, int16) == 1) && (CC_FIND[1](int8, (int16 + 1)) == 1))) {
        int18 = int17;
        if (((int16 >= (int10 * 4)) && (int16 < ((int10 + int12) * 4)))) {
            CC_SETPARAM_INT(5926, (int11 * MAX(0, ((int16 / 4) - int10))));
        } else if ((int16 < (int10 * 4))) {
            CC_SETPARAM_INT(5926, (int13 + (int11 * (int16 / 4))));
            int18 = 1;
        } else {
            CC_SETPARAM_INT(5926, (struct_getparam(int6, 3578) * (int16 / 4)));
        };
        CC_SETPARAM_INT(5927, 0);
        CC_SETPARAM_INT(5928, 0);
        CC_SETPARAM_INT(5929, 0);
        if ((int18 == 0)) {
            CC_SETPOSITION((cc_getparam(5926) - ((cc_getparam(5926) - CC_GETX()) / 2)), (cc_getparam(5927) - ((cc_getparam(5927) - CC_GETY()) / 2)), cc_getparam(5928), cc_getparam(5929));
        } else {
            CC_SETPOSITION(cc_getparam(5926), cc_getparam(5927), cc_getparam(5928), cc_getparam(5929));
        };
        CC_SETPOSITION[1](((CC_GETX() + (CC_GETWIDTH() / 2)) - (CC_GETWIDTH[1]() / 2)), 0, 0, 1);
        if ((cc_getparam(3536) == int0)) {
            script1848(int0, CC_GETX());
        };
        if (((CC_FIND(int8, (int16 + 1)) == 1) && (CC_FIND[1](int8, (int16 + 2)) == 1))) {
            CC_SETPOSITION[1](CC_GETX(), (CC_GETY() + (CC_GETHEIGHT() / 2)), 0, 0);
        };
        int16 = (int16 + 4);
    };
    return;
}