//[clientscript,clan_setup_flags]
function script4322(int0: component, int1: component, int2: component, int3: component): void {
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int4 = 0;
    var int5 = 0;
    var int6 = 8;
    var int7 = 8;
    var int8 = 50;
    var int9 = 36;
    var int10 = 0;
    var int11 = 0;
    var int12 = ((IF_GETWIDTH(int0) - (int6 * 2)) / (int6 + int8));
    var int13 = ENUM_GETOUTPUTCOUNT(3722 as cs2enum);
    var int14 = ENUM_GETOUTPUTCOUNT(3721 as cs2enum);
    var int15 = MIN(int13, int14);
    while ((int4 < int15)) {
        int10 = (int6 + ((int8 + int6) * (int4 - (int5 * int12))));
        int11 = (int7 + (int5 * (int9 + int7)));
        CC_CREATE(int2, 5, int4);
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETPOSITION(int10, int11, 0, 0);
        CC_SETGRAPHIC(6036 as graphic);
        CC_SETONVARTRANSMIT(callback(script4324, int15, 1854, 1));
        CC_SETONMOUSEOVER(callback(script4326, int4, int2));
        CC_SETONMOUSELEAVE(callback(script4327, int4, int2));
        CC_CREATE(int3, 5, int4);
        CC_SETSIZE((int8 - 8), (int9 - 8), 0, 0);
        CC_SETPOSITION((int10 + 4), (int11 + 4), 0, 0);
        CC_SETGRAPHIC(enum_getvalue(0, 23, 3721, int4));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script4323, int4, int2, int15));
        CC_SETONMOUSEREPEAT(callback(script8799, enum_getvalue(0, 36, 3722, int4), -2147483645, -2147483643));
        if ((MODULO(++int4, int12) == 0)) {
            int5 = (int5 + 1);
        };
    };
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, (int7 + ((int5 + 1) * (int7 + int9))), int0);
    script31(int1, int0, 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    return;
}