//
function script13426(int0: obj, int1: unknown_int): obj {
    var int2 = int0;
    var int3 = 0;
    switch (int0) {
        case 9813:
        case 9814:
        case 34670:
        case 34967:
        case 34968:
        case 34969: {
            int3 = 31;
            break;
        }
        default: {
            if ((item_getparam(int0, 277) != -1 as stat)) {
                int3 = enum_getvalue(17, 0, 1482 as cs2enum, item_getparam(int0, 277));
            };
            break;
        }
    };
    if ((int3 > 0)) {
        int2 = script13640(int0, int3);
    };
    if ((int2 == -1 as obj)) {
        int2 = int0;
    };
    return int2;
}