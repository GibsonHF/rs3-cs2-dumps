//
function script1922(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    var int8 = IF_GETNEXTSUBID(int0);
    var int9 = (int1 + 1);
    var int10 = 2310 as graphic;
    switch (int2) {
        case 0: {
            if ((BITCOUNT(varplayer_8160) >= int9)) {
                int10 = 2294 as graphic;
            };
            break;
        }
        case 1: {
            if ((BITCOUNT(varplayer_8161) >= int9)) {
                int10 = 2294 as graphic;
            };
            break;
        }
        case 2: {
            if ((BITCOUNT(varplayer_8162) >= int9)) {
                int10 = 2294 as graphic;
            };
            break;
        }
        case 3: {
            if ((struct_getparam(int3, 7504) < varplayer_1297)) {
                int10 = 2294 as graphic;
            };
            break;
        }
    };
    CC_CREATE(int0, 5, int8);
    stack(1925);
    stack(int0);
    stack(int8);
    int8 = (int8 + 1);
    stack(1);
    stack(int2);
    stack(int1);
    stack(int3);
    stack(8160);
    stack(8161);
    stack(8162);
    stack(8158);
    stack(4);
    CC_SETONVARTRANSMIT("iiiiiiY");
    CC_SETSIZE(int6, int7, 0, 0);
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETGRAPHIC(int10);
    return;
}