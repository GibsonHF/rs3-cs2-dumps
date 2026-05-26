//
function script4769(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): [number, number, number, number, number, number, number, number] {
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    var int14 = -1;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = 0;
    var int37 = 0;
    var int38 = 0;
    var int39 = 0;
    var int40 = 0;
    if ((int0 == 1)) {
        int11 = 300;
        int13 = 73072707;
        int14 = 73072706;
    } else if ((int0 == 2)) {
        int11 = 600;
        int13 = 73072705;
        int14 = 73072704;
    } else {
        int11 = 900;
        int13 = 73072703;
        int14 = 73072702;
        varclient_1561 = 0;
        varclient_1562 = 0;
    };
    while (((int1 <= 31) && (int12 == 0))) {
        int10 = script4790(int1);
        if (((int10 > int11) || (int10 == 0))) {
            int12 = 1;
        } else {
            var [int2, int3, int4, int5, int6, int7, int8, int15, int16, int17, int18, int19, int20, int21, int22, int23, int24, int25, int26, int27, int28, int29, int30, int31, int32, int33, int34, int35, int36, int37, int38, int39] = script4795(int1, int2, int3, int4, int5, int6, int7, int8);
            if (((((((int15 + int16) + int17) + int18) + int19) + int20) == 0)) {
                int40 = 0;
            } else if (((((((int33 + int34) + int35) + int36) + int37) + int38) > 0)) {
                int40 = 3;
            } else if (((((((int27 + int28) + int29) + int30) + int31) + int32) > 0)) {
                int40 = 2;
            } else if (((((((int21 + int22) + int23) + int24) + int25) + int26) > 0)) {
                int40 = 1;
            };
            int9 = script4770(int13, int9, int10, int39, int40, int1);
            if ((int9 == 0)) {
                return [0, int2, int3, int4, int5, int6, int7, int8];
            };
            var int1 = (int1 + 1);
        };
    };
    var int41 = 38;
    var int42 = ((int9 / 8) * int41);
    if ((int9 > 0)) {
        int9 = script4771(int13, int9);
    };
    int42 = (int42 + 10);
    IF_SETSCROLLSIZE(IF_GETWIDTH(int13), int42, int13);
    IF_SETSCROLLPOS(0, 0, int13);
    script31(int14, int13, 5666, 5663, 5664, 5665, 5686, 5685);
    return [int1, int2, int3, int4, int5, int6, int7, int8];
}