//
function script19011(int0: struct, int1: int, int2: int, int3: int, int4: unknown_int): int {
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1 as graphic;
    var int10 = -1 as graphic;
    [int5, int6, int7, int8, int9, int10] = script19013(int0);
    switch (int0) {
        case 49941: {
            script2994(comp(1870, 4), int1++, (int2 + int5), int6, 0, 0, int7, int8, 0, 0, -1 as graphic);
            if ((int4 == 1)) {
                CC_SETGRAPHIC(int9);
            } else {
                CC_SETGRAPHIC(int10);
            };
            break;
        }
    };
    return int1;
}