//
function script8938(int0: component, int1: component, int2: struct): void {
    var int3 = IF_GETSCROLLHEIGHT(int1);
    var int4 = IF_GETHEIGHT(int0);
    var int5 = int4;
    var int6 = 0;
    if ((int3 > 0)) {
        int6 = SCALE(IF_GETHEIGHT(int1), int3, int5);
    } else {
        int6 = int5;
    };
    int6 = MAX(int6, struct_getparam(int2, 4406));
    if ((struct_getparam(int2, 4407) != -1)) {
        int6 = MIN(int6, struct_getparam(int2, 4407));
    };
    var int7 = IF_GETSCROLLY(int1);
    var int8 = (int3 - IF_GETHEIGHT(int1));
    var int9 = 0;
    if ((int7 > 0)) {
        int8 = MAX(1, (int3 - IF_GETHEIGHT(int1)));
        if ((int7 > int8)) {
            IF_SETSCROLLPOS(IF_GETSCROLLX(int1), int8, int1);
            int7 = int8;
        };
        int9 = SCALE(int7, int8, (int5 - int6));
        int9 = MIN(MAX(int9, 0), (int5 - int6));
    };
    var int10 = script12611(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(16, 0, 0, 1);
    CC_SETONCLICK(callback(script34, int0, int1, -2147483646));
    CC_CREATE(int0, 3, 1);
    CC_SETCOLOUR(16382653);
    CC_SETTRANS(51);
    CC_SETFILL(1);
    CC_SETPOSITION(4, int9, 0, 0);
    script12591(7, int10);
    CC_SETDRAGGABLE(int0, 0);
    CC_SETDRAGRENDERBEHAVIOUR(3);
    CC_SETSIZE(8, int6, 0, 0);
    CC_SETONDRAG(callback(script35, int0, int1, -2147483646, 0));
    CC_SETONDRAGCOMPLETE(callback(script35, int0, int1, -2147483646, 1));
    CC_CREATE(int0, 5, 2);
    CC_SETHIDE(1);
    CC_CREATE(int0, 5, 3);
    CC_SETHIDE(1);
    CC_CREATE(int0, 3, 4);
    CC_SETCOLOUR(4962777);
    CC_SETFILL(1);
    CC_SETTRANS(153);
    CC_SENDTOBACK();
    CC_SETPOSITION(7, 0, 0, 0);
    CC_SETSIZE(2, 0, 0, 1);
    script12591(7, int10);
    IF_SETONSCROLLWHEEL(callback(script36, int0, int1, -2147483646), int0);
    IF_SETONSCROLLWHEEL(callback(script36, int0, int1, -2147483646), int1);
    script14178(int0, int1);
    return;
}