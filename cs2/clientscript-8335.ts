//
function script8335(int0: int, int1: unknown_int, int2: int, int3: int): void {
    var int4 = script10405(int0);
    if ((int4 == -1 as struct)) {
        return;
    };
    var int5 = script8418(int4, 0);
    if ((int5 == -1 as struct)) {
        return;
    };
    var int6 = struct_getparam(int4, 3505);
    if ((int6 == comp(-1, 65535))) {
        return;
    };
    var int7 = struct_getparam(int4, 3511);
    if ((int7 == comp(-1, 65535))) {
        return;
    };
    var int8 = int2;
    var int9 = int3;
    var int10 = 0;
    var int11 = 3;
    var int12 = 4;
    var int13 = 5;
    if ((int1 == 1)) {
        int10 = 8;
        int11 = 11;
        int12 = 12;
        int13 = 13;
    };
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = IF_GETSCROLLX(int6);
    var int20 = IF_GETSCROLLY(int6);
    if (((CC_FIND(int7, int10) == 1) && (CC_FIND[1](int7, int11) == 1))) {
        if ((int1 == 1)) {
            int14 = CC_GETX();
            int15 = (int14 + CC_GETWIDTH());
            int15 = (int15 - CC_GETWIDTH[1]());
            int16 = (int15 - int14);
            int16 = MAX(int16, 1);
            int17 = int2;
            int18 = MAX(1, (IF_GETSCROLLWIDTH(int6) - IF_GETWIDTH(int6)));
            int19 = SCALE(int17, int16, int18);
            CC_SETPOSITION[1]((int14 + int2), CC_GETY[1](), 0, 0);
        } else {
            int14 = CC_GETY();
            int15 = (int14 + CC_GETHEIGHT());
            int15 = (int15 - CC_GETHEIGHT[1]());
            int16 = (int15 - int14);
            int16 = MAX(int16, 1);
            int17 = int3;
            int18 = MAX(1, (IF_GETSCROLLHEIGHT(int6) - IF_GETHEIGHT(int6)));
            int20 = SCALE(int17, int16, int18);
            CC_SETPOSITION[1](CC_GETX[1](), (int14 + int3), 0, 0);
        };
    };
    IF_SETSCROLLPOS(int19, int20, int6);
    script8332(int0);
    return;
}