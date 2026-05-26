//
function script5206(): void {
    var int0 = (IF_GETWIDTH(73531464) - 240);
    var int1 = (int0 / 5);
    var int2 = (int1 + ((int0 - (int1 * 5)) / 2));
    var int3 = IF_GETSCROLLY(73531464);
    var int4 = ENUM_GETOUTPUTCOUNT(4850);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = (int1 + 60);
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as struct;
    var int13 = -1 as struct;
    var int14 = 0;
    CC_DELETEALL(73531394);
    CC_DELETEALL(73531395);
    while ((int11 < int4)) {
        int12 = enum_getvalue(0, 73, 4850 as cs2enum, int11);
        if (((int11 != 0) && (int12 == -1 as struct))) {
            return;
        };
        int10 = struct_getparam(int12, 1885);
        int13 = enum_getvalue(0, 73, 4849 as cs2enum, int10);
        int8 = script5200(int10);
        if ((((int13 != -1 as struct) && (struct_getparam(int13, 2196) == 1)) && (int8 == 0))) {
            CC_CREATE(73531395, 3, int11);
            CC_SETHIDE(1);
        } else {
            if ((varbitplayer_1038 == int11)) {
                int7 = 1;
            } else {
                int7 = 0;
            };
            if (((int10 == 0) || (int8 == 1))) {
                int14 = 0;
            } else {
                int14 = 1;
            };
            int5 = (int2 + (MODULO(int11, 4) * int9));
            int6 = (int1 + ((int11 / 4) * int9));
            script13998(73531394, 73531395, 28556, int5, int6, 60, 60, int11, int14, "", int7);
            CC_CREATE(73531394, 5, IF_GETNEXTSUBID(73531394));
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETSIZE(60, 60, 0, 0);
            CC_SETGRAPHIC(struct_getparam(int12, 1883));
            if (((int8 == 1) && (CC_FIND(73531395, int11) == 1))) {
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
    if ((int16 > IF_GETHEIGHT(73531464))) {
        IF_SETSCROLLSIZE(0, int16, 73531464);
        IF_SETSCROLLPOS(0, int3, 73531464);
    } else {
        IF_SETSCROLLSIZE(0, 0, 73531464);
        IF_SETSCROLLPOS(0, 0, 73531464);
    };
    script7791(73531465, 73531464);
    return;
}