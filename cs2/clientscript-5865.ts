//
function script5865(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int): [int, int, int, int, int, int, int, int, int, int] {
    var int11 = MODULO(int0, 10);
    var int12 = (MODULO(int0, 100) - MODULO(int0, 10));
    var int13 = (MODULO(int0, 1000) - MODULO(int0, 100));
    var int14 = (MODULO(int0, 10000) - MODULO(int0, 1000));
    var int15 = (MODULO(int0, 100000) - MODULO(int0, 10000));
    var int16 = (MODULO(int0, 1000000) - MODULO(int0, 100000));
    var int17 = (MODULO(int0, 10000000) - MODULO(int0, 1000000));
    var int18 = (MODULO(int0, 100000000) - MODULO(int0, 10000000));
    var int19 = (MODULO(int0, 1000000000) - MODULO(int0, 100000000));
    var int20 = ((int0 - MODULO(int0, 1000000000)) / 1000000000);
    var int1 = (int1 + int11);
    var int2 = (int2 + int12);
    var int3 = (int3 + int13);
    var int4 = (int4 + int14);
    var int5 = (int5 + int15);
    var int6 = (int6 + int16);
    var int7 = (int7 + int17);
    var int8 = (int8 + int18);
    var int9 = (int9 + int19);
    var int10 = (int10 + int20);
    if ((int1 >= 10)) {
        int1 = (int1 - 10);
        int2 = (int2 + 10);
    };
    if ((int2 >= 100)) {
        int2 = (int2 - 100);
        int3 = (int3 + 100);
    };
    if ((int3 >= 1000)) {
        int3 = (int3 - 1000);
        int4 = (int4 + 1000);
    };
    if ((int4 >= 10000)) {
        int4 = (int4 - 10000);
        int5 = (int5 + 10000);
    };
    if ((int5 >= 100000)) {
        int5 = (int5 - 100000);
        int6 = (int6 + 100000);
    };
    if ((int6 >= 1000000)) {
        int6 = (int6 - 1000000);
        int7 = (int7 + 1000000);
    };
    if ((int7 >= 10000000)) {
        int7 = (int7 - 10000000);
        int8 = (int8 + 10000000);
    };
    if ((int8 >= 100000000)) {
        int8 = (int8 - 100000000);
        int9 = (int9 + 100000000);
    };
    if ((int9 >= 1000000000)) {
        int9 = (int9 - 1000000000);
        int10 = (int10 + 1);
    };
    return [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10];
}