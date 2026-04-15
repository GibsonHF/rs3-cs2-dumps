//
function script2013(int0: int, int1: int): void {
    var int2 = script10405(int1);
    var int3 = struct_getparam(int2, 3509);
    var int4 = script8374(int3);
    var int5 = script10405(int0);
    var int6 = struct_getparam(int5, 3509);
    var int7 = struct_getparam(int5, 3510);
    var int8 = script8418(int5, 0);
    var int9 = struct_getparam(int8, 3578);
    var int10 = (script8374(int6) - int4);
    var int11 = ((int10 + int4) - 1);
    if (((CC_FIND(int3, script8373(script8372(int3, int1))) == 1) && (IF_GETSCROLLWIDTH(int3) > 0))) {
        IF_SETSCROLLPOS(IF_GETSCROLLX(int6), IF_GETSCROLLY(int6), int3);
        script1846(int1);
        script1848(int1, CC_GETX());
    };
    var int12 = 0;
    while ((int11 >= int10)) {
        int12 = (int11 * 4);
        script2014(int6, (int12 + 1));
        script2014(int6, int12);
        int11 = (int11 - 1);
    };
    var int13 = 0;
    while ((int11 >= 0)) {
        int12 = (int11 * 4);
        if (((CC_FIND[1](int6, (int12 + 1)) == 1) && (CC_FIND(int6, int12) == 1))) {
            CC_SETPOSITION[1](((int9 * int11) + (CC_GETWIDTH[1]() / 2)), 0, 0, 1);
            CC_SETPOSITION((int9 * int11), 0, 0, 1);
            if ((cc_getparam(3536) == int0)) {
                int13 = int11;
            };
        };
        int11 = (int11 - 1);
    };
    if ((int10 <= 1)) {
        script8378(1, int0);
    };
    if ((int13 >= 0)) {
        script8359(int0, int10, int13);
        if ((CC_FIND(int6, script8373(int13)) == 1)) {
            script1848(int0, CC_GETX());
        };
    };
    if ((CC_FIND(int7, 0) == 1)) {
        CC_SETONMOUSEREPEAT(callback());
    };
    if ((CC_FIND(int7, 1) == 1)) {
        CC_SETONMOUSEREPEAT(callback());
    };
    return;
}