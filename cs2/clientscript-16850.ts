//
function script16850(int0: obj, int1: unknown_int): unknown_int {
    var int2 = 0;
    var int3 = 8;
    var int4 = -1 as obj;
    if (((int1 == 0) && (PLAYERMEMBER[1]() == false))) {
        int3 = 3;
    };
    while ((int2 < int3)) {
        int4 = STOCKMARKET_GETOFFERITEM[1](int2, 0);
        if (((int4 != -1 as obj) && (int4 == int0))) {
            return 1;
        };
        int2 = (int2 + 1);
    };
    return 0;
}