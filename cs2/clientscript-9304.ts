//
function script9304(int0: struct): dbrow {
    var int1 = -1 as dbrow;
    var int2 = -1 as dbrow;
    var int3 = -1 as cs2enum;
    if ((int0 != -1 as struct)) {
        int3 = struct_getparam(int0, 2815);
        int2 = struct_getparam(int0, 9129);
        if ((int3 != -1 as cs2enum)) {
            int1 = script18540(int3);
        } else if (((int2 != -1 as dbrow) && (PLAYERMEMBER() == false))) {
            int1 = int2;
        } else {
            int1 = struct_getparam(int0, 8543);
        };
    };
    int1 = script9825(int0, int1);
    return int1;
}