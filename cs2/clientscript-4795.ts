//
function script4795(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): [int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int] {
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
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
    var int27 = script4790(int0);
    var int28 = -1 as graphic;
    var string0 = "";
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var int34 = 0;
    if (((int27 < 1) || (int27 > 900))) {
        printmessage(`Clan Build Tick : Check resources for invalid job ${inttostring(int27, 10)} at position ${inttostring(int0, 10)}.`);
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    };
    [int28, string0, int30, int31, int34, int29, int32, int33] = script4791(int27);
    if (((int27 > 300) && (int27 < 600))) {
        int30 = (int30 - int31);
    };
    if ((int27 == 616)) {
        [int8, int9, int10, int11, int12, int13] = script4724(1);
    } else if ((int27 == 617)) {
        [int8, int9, int10, int11, int12, int13] = script4724(2);
    } else if ((int27 == 618)) {
        [int8, int9, int10, int11, int12, int13] = script4724(3);
    } else {
        [int8, int9, int10, int11, int12, int13] = script4792(int27, int30);
    };
    if ((((int34 == 2) && (int27 > 300)) && (int27 < 600))) {
        int8 = (int8 * 2);
        int9 = (int9 * 2);
        int10 = (int10 * 2);
        int11 = (int11 * 2);
        int12 = (int12 * 2);
        int13 = (int13 * 2);
    };
    if ((int27 < 300)) {
        return [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    };
    var int35 = int8;
    var int36 = int9;
    var int37 = int10;
    var int38 = int11;
    var int39 = int12;
    var int40 = int13;
    if ((int27 > 600)) {
        [int14, int15, int16, int17, int18, int19] = script4793(int29, int32);
    };
    int35 = MAX(0, (int35 - int14));
    int36 = MAX(0, (int36 - int15));
    int37 = MAX(0, (int37 - int16));
    int38 = MAX(0, (int38 - int17));
    int39 = MAX(0, (int39 - int18));
    int40 = MAX(0, (int40 - int19));
    if (((((((int35 == 0) && (int36 == 0)) && (int37 == 0)) && (int38 == 0)) && (int39 == 0)) && (int40 == 0))) {
        return [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15, int16, int17, int18, int19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100];
    };
    var int41 = MIN(int35, int1);
    var int42 = MIN(int36, int2);
    var int43 = MIN(int37, int3);
    var int44 = MIN(int38, int4);
    var int45 = MIN(int39, int5);
    var int46 = MIN(int40, int6);
    int35 = MAX(0, (int35 - int41));
    int36 = MAX(0, (int36 - int42));
    int37 = MAX(0, (int37 - int43));
    int38 = MAX(0, (int38 - int44));
    int39 = MAX(0, (int39 - int45));
    int40 = MAX(0, (int40 - int46));
    var int1 = MAX(0, (int1 - int41));
    var int2 = MAX(0, (int2 - int42));
    var int3 = MAX(0, (int3 - int43));
    var int4 = MAX(0, (int4 - int44));
    var int5 = MAX(0, (int5 - int45));
    var int6 = MAX(0, (int6 - int46));
    if (((((((int35 == 0) && (int36 == 0)) && (int37 == 0)) && (int38 == 0)) && (int39 == 0)) && (int40 == 0))) {
        return [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15, int16, int17, int18, int19, int41, int42, int43, int44, int45, int46, 0, 0, 0, 0, 0, 0, 100];
    };
    int20 = MIN(int35, (int7 / 1));
    int35 = MAX(0, (int35 - int20));
    var int7 = (int7 - (int20 * 1));
    int21 = MIN(int36, (int7 / 1));
    int36 = MAX(0, (int36 - int21));
    int7 = (int7 - (int21 * 1));
    int22 = MIN(int37, (int7 / 3));
    int37 = MAX(0, (int37 - int22));
    int7 = (int7 - (int22 * 3));
    int23 = MIN(int38, (int7 / 1));
    int38 = MAX(0, (int38 - int23));
    int7 = (int7 - (int23 * 1));
    int24 = MIN(int39, (int7 / 1));
    int39 = MAX(0, (int39 - int24));
    int7 = (int7 - (int24 * 1));
    int25 = MIN(int40, (int7 / 3));
    int40 = MAX(0, (int40 - int25));
    int7 = (int7 - (int25 * 3));
    int26 = script4796(int35, int8, int36, int9, int37, int10, int38, int11, int39, int12, int40, int13);
    return [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15, int16, int17, int18, int19, int41, int42, int43, int44, int45, int46, int20, int21, int22, int23, int24, int25, int26];
}