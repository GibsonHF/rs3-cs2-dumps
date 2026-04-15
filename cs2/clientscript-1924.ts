//
function script1924(int0: component, int1: component, int2: int, int3: int, int4: struct, int5: int, int6: int, int7: int, int8: int, int9: int, int10: boolean): void {
    var int11 = IF_GETNEXTSUBID(int0);
    var int12 = (int2 + 1);
    var string0 = struct_getparam(int4, 7505);
    var int13 = 2291 as graphic;
    var int14 = struct_getparam(int4, 7508);
    switch (int3) {
        case 0: {
            if ((BITCOUNT(varplayer_8160) >= int12)) {
                int13 = 2290 as graphic;
            };
            break;
        }
        case 1: {
            if ((BITCOUNT(varplayer_8161) >= int12)) {
                int13 = 2290 as graphic;
            };
            break;
        }
        case 2: {
            if ((BITCOUNT(varplayer_8162) >= int12)) {
                int13 = 2290 as graphic;
            };
            break;
        }
        case 3: {
            if ((struct_getparam(int4, 7504) < varplayer_1297)) {
                int13 = 2290 as graphic;
            };
            break;
        }
    };
    CC_CREATE(int0, 5, int11);
    if ((int10 == false)) {
        CC_SETONVARTRANSMIT(callback(script1925, int0, int11++, 2, int3, int2, int4, 8160, 8161, 8162, 8158, 4));
    };
    CC_SETSIZE(int7, int8, 0, 0);
    CC_SETPOSITION(int5, int6, 0, 0);
    CC_SETGRAPHIC(int13);
    CC_SETHIDE(int10);
    CC_CREATE(int0, 5, int11++);
    CC_SETSIZE((int7 - (int9 * 2)), (int8 - (int9 * 2)), 0, 0);
    CC_SETPOSITION((int5 + int9), (int6 + int9), 0, 0);
    CC_SETGRAPHIC(int14);
    var int15 = IF_GETNEXTSUBID(int1);
    CC_CREATE(int1, 4, int15);
    CC_SETSIZE(int7, int8, 0, 0);
    CC_SETPOSITION(int5, int6, 0, 0);
    CC_SETOP(1, string0);
    CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
    return;
}