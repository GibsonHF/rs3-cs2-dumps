//
function script1922(int0: component, int1: int, int2: int, int3: struct, int4: int, int5: int, int6: int, int7: unknown_int): void {
    var int8 = IF_GETNEXTSUBID(int0);
    var int9 = (int1 + 1);
    var int10 = 2310;
    switch (int2) {
        case 0: {
            if ((BITCOUNT(varplayer_8160) >= int9)) {
                int10 = 2294;
            };
            break;
        }
        case 1: {
            if ((BITCOUNT(varplayer_8161) >= int9)) {
                int10 = 2294;
            };
            break;
        }
        case 2: {
            if ((BITCOUNT(varplayer_8162) >= int9)) {
                int10 = 2294;
            };
            break;
        }
        case 3: {
            if ((struct_getparam(int3, 7504) < varplayer_1297)) {
                int10 = 2294;
            };
            break;
        }
    };
    CC_CREATE(int0, 5, int8);
    CC_SETONVARTRANSMIT(callback(script1925, int0, int8++, 1, int2, int1, int3, 8160, 8161, 8162, 8158, 4));
    CC_SETSIZE(int6, int7, 0, 0);
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETGRAPHIC(int10);
    return;
}