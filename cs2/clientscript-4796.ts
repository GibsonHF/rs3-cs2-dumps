//
function script4796(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: int): int {
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    if ((int1 > 0)) {
        int14 = ((int0 * 1000) / int1);
        int12 = (int12 + 1);
    };
    if ((int3 > 0)) {
        int15 = ((int2 * 1000) / int3);
        int12 = (int12 + 1);
    };
    if ((int5 > 0)) {
        int16 = ((int4 * 1000) / int5);
        int12 = (int12 + 1);
    };
    if ((int7 > 0)) {
        int17 = ((int6 * 1000) / int7);
        int12 = (int12 + 1);
    };
    if ((int9 > 0)) {
        int18 = ((int8 * 1000) / int9);
        int12 = (int12 + 1);
    };
    if ((int11 > 0)) {
        int19 = ((int10 * 1000) / int11);
        int12 = (int12 + 1);
    };
    int12 = MAX(int12, 1);
    var int20 = ((((((int14 + int15) + int16) + int17) + int18) + int19) / (int12 * 10));
    int13 = (100 - int20);
    if (((int13 == 100) && (((int0 != int1) && (int0 != 0)) || (((int2 != int3) && (int2 != 0)) || (((int4 != int5) && (int4 != 0)) || (((int6 != int7) && (int6 != 0)) || (((int8 != int9) && (int8 != 0)) || ((int10 != int11) && (int10 != 0))))))))) {
        int13 = 99;
    };
    return int13;
}