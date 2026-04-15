//
function script5206(): void {
    var int0 = (IF_GETWIDTH(comp(1122, 72)) - 240);
    var int1 = (int0 / 5);
    var int2 = (int1 + ((int0 - (int1 * 5)) / 2));
    var int3 = IF_GETSCROLLY(comp(1122, 72));
    var int4 = ENUM_GETOUTPUTCOUNT(4850 as cs2enum);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = (int1 + 60);
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as struct;
    var int13 = -1 as struct;
    var int14 = false;
    CC_DELETEALL(comp(1122, 2));
    CC_DELETEALL(comp(1122, 3));
    while ((int11 < int4)) {
        int12 = enum_getvalue(0, 73, 4850 as cs2enum, int11);
        if (((int11 != 0) && (int12 == -1 as struct))) {
            return;
        };
        int10 = struct_getparam(int12, 1885);
        int13 = enum_getvalue(0, 73, 4849 as cs2enum, int10);
        int8 = script5200(int10);
        if ((((int13 != -1 as struct) && (struct_getparam(int13, 2196) == 1)) && (int8 == 0))) {
            CC_CREATE(comp(1122, 3), 3, int11);
            CC_SETHIDE(true);
        } else {
            if ((varbitplayer_1038 == int11)) {
                int7 = 1;
            } else {
                int7 = 0;
            };
            if (((int10 == 0) || (int8 == 1))) {
                int14 = false;
            } else {
                int14 = true;
            };
            int5 = (int2 + (MODULO(int11, 4) * int9));
            int6 = (int1 + ((int11 / 4) * int9));
            script13998(comp(1122, 2), comp(1122, 3), 28556 as struct, int5, int6, 60, 60, int11, int14, "", int7);
            CC_CREATE(comp(1122, 2), 5, IF_GETNEXTSUBID(comp(1122, 2)));
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETSIZE(60, 60, 0, 0);
            CC_SETGRAPHIC(struct_getparam(int12, 1883));
            if (((int8 == 1) && (CC_FIND(comp(1122, 3), int11) == 1))) {
                CC_SETONOP(callback(script5207, -2147483645, -2147483643));
            };
        };
        int11 = (int11 + 1);
    };
    var int15 = (int4 / 4);
    if ((MODULO(int4, 4) != 0)) {
        int15 = (int15 + 1);
    };
    var int16 = ((int15 * int9) + int1);
    if ((int16 > IF_GETHEIGHT(comp(1122, 72)))) {
        IF_SETSCROLLSIZE(0, int16, comp(1122, 72));
        IF_SETSCROLLPOS(0, int3, comp(1122, 72));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1122, 72));
        IF_SETSCROLLPOS(0, 0, comp(1122, 72));
    };
    script7791(comp(1122, 73), comp(1122, 72));
    return;
}