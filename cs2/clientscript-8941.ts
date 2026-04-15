//
function script8941(int0: int, int1: int, int2: int): [int, cs2enum, int] {
    var int3 = 52;
    var int4 = 745 as cs2enum;
    var int5 = 0;
    var int6 = 0;
    while ((int5 < 32)) {
        if ((TESTBIT(int0, int5) == 1)) {
            int6 = (int6 + 1);
        };
        int5 = (int5 + 1);
    };
    var int7 = 1;
    var int8 = (int1 / (int2 + int3));
    int7 = (int6 / int8);
    if ((MODULO(int6, int8) != 0)) {
        int7 = (int7 + 1);
    };
    if ((int7 > 3)) {
        int4 = 8548 as cs2enum;
        int3 = 35;
        int7 = 1;
        int8 = (int1 / (int2 + int3));
        int7 = (int6 / int8);
        if ((MODULO(int6, int8) != 0)) {
            int7 = (int7 + 1);
        };
    };
    return [int8, int4, int3];
}