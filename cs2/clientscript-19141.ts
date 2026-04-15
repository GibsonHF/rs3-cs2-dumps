//
function script19141(int0: int, int1: struct): [int, unknown_int, component] {
    var int2 = 0;
    var int3 = -1;
    var int4 = comp(-1, 65535);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    [int5, int6, int7] = script19143(int1);
    switch (int0) {
        case 0: {
            int2 = int5;
            int3 = 84410402;
            int4 = comp(1288, 32);
            break;
        }
        case 1: {
            int2 = int6;
            int3 = 84410398;
            int4 = comp(1288, 28);
            break;
        }
        case 2: {
            int2 = int7;
            int3 = 84410394;
            int4 = comp(1288, 24);
            break;
        }
    };
    return [int2, int3, int4];
}