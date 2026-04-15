//
function script8937(int0: component, int1: component, int2: struct): void {
    var int3 = IF_GETSCROLLWIDTH(int1);
    var int4 = IF_GETWIDTH(int0);
    var int5 = int4;
    var int6 = 0;
    if ((int3 > 0)) {
        int6 = SCALE(IF_GETWIDTH(int1), int3, int5);
    } else {
        int6 = int5;
    };
    int6 = MAX(int6, 10);
    var int7 = IF_GETSCROLLX(int1);
    var int8 = 0;
    var int9 = 0;
    if ((int7 > 0)) {
        int8 = (int3 - IF_GETWIDTH(int1));
        if ((int8 == 0)) {
            int8 = 1;
        };
        if ((int7 > int8)) {
            IF_SETSCROLLPOS(int8, 0, int1);
            int7 = int8;
        };
        int9 = SCALE(int7, int8, (int5 - int6));
        int9 = MIN(MAX(int9, 0), (int5 - int6));
    };
    var int10 = script12611(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, 16, 1, 0);
    CC_SETONCLICK(callback(script1698, int0, int1, -2147483647));
    CC_CREATE(int0, 3, 1);
    CC_SETCOLOUR(16382653);
    CC_SETFILL(1);
    CC_SETTRANS(51);
    CC_SETPOSITION(int9, 4, 0, 0);
    script12591(4, int10);
    CC_SETDRAGGABLE(int0, 0);
    CC_SETDRAGRENDERBEHAVIOUR(3);
    CC_SETSIZE(int6, 8, 0, 0);
    cc_setparam(7986, 2);
    CC_SETONDRAG(callback(script1700, int0, int1, -2147483647, 0));
    CC_SETONDRAGCOMPLETE(callback(script1700, int0, int1, -2147483647, 1));
    CC_CREATE(int0, 5, 2);
    CC_CREATE(int0, 5, 3);
    CC_CREATE(int0, 3, 4);
    CC_SETCOLOUR(4962777);
    CC_SETFILL(1);
    CC_SETTRANS(153);
    CC_SENDTOBACK();
    CC_SETPOSITION(0, 7, 0, 0);
    CC_SETSIZE(0, 2, 1, 0);
    script12591(4, int10);
    IF_SETONSCROLLWHEEL(callback(script1701, int0, int1, -2147483646), int0);
    IF_SETONSCROLLWHEEL(callback(script1701, int0, int1, -2147483646), int1);
    script14179(int0, int1);
    return;
}