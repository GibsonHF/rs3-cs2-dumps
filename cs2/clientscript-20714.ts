//
function script20714(int0: number, int1: number): void {
    var int2 = script11638(int0);
    var int3 = dbrow_getfield(int2, 1511504, 0);
    if (((int1 == 1) && (int3 == 1))) {
        return;
    };
    var int4 = varbitplayer_61208;
    var int5 = int4;
    var int6 = 0;
    if ((varbitplayer_61209 == 1)) {
        int6 = 1;
        int5 = MODULO((int4 + 2), 4);
    } else {
        int4 = MODULO((int5 + 2), 4);
    };
    var int7 = DB_GETFIELDCOUNT(int2, 1511664);
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1;
    var int14 = 0;
    var int15 = 0;
    while ((int15 < int7)) {
        [int8, int9, int10, int11, int12, int13] = dbrow_getfield(int2, 1511664, int15);
        int12 = MODULO((int12 + varbitplayer_61210), 4);
        if ((int13 > 0)) {
            if ((int12 == int4)) {
                int14 = 1;
                int15 = int7;
            } else {
                int15 = (int15 + 1);
            };
        } else {
            int15 = (int15 + 1);
        };
    };
    if (((int1 == 1) && (int14 == 0))) {
        return;
    };
    [int8, int9] = script11639(int8, int9, 1, 1, varbitplayer_61210);
    [int10, int11] = script11639(int10, int11, 1, 1, varbitplayer_61210);
    var int16 = int8;
    var int17 = int9;
    var int18 = script11650(int5);
    var int19 = dbrow_getfield(int2, 1511552, 0);
    var int20 = int19;
    var int21 = (int19 / 2);
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = dbrow_getfield(int2, 1511536, 0);
    var int26 = DB_GETFIELDCOUNT(int2, 1511648);
    var int27 = -1;
    var int28 = -1;
    var int29 = -1;
    var int30 = -1;
    var int31 = -1;
    var int32 = -1;
    var int33 = -1;
    var int34 = 0;
    var int35 = 0;
    if (((int26 == 1) && (int25 == 1))) {
        [int27, int28, int29, int30] = dbrow_getfield(int2, 1511648, 0);
        if ((int27 < int29)) {
            int31 = ((int29 - int27) + 1);
        } else {
            int31 = ((int27 - int29) + 1);
        };
        if ((int28 < int30)) {
            int32 = ((int30 - int28) + 1);
        } else {
            int32 = ((int28 - int30) + 1);
        };
        if (((varbitplayer_61210 == 1) || (varbitplayer_61210 == 3))) {
            int33 = int31;
            int31 = int32;
            int32 = int33;
        };
        if ((int31 < int19)) {
            int34 = ((int19 - int31) / 2);
            int19 = (int19 - int34);
        };
        if ((int32 < int20)) {
            int35 = ((int20 - int32) / 2);
            int20 = (int20 - int35);
        };
    };
    switch (int18) {
        case 0: {
            if ((int6 == 0)) {
                int23 = 1;
            };
            int23 = (int23 - int35);
            int24 = 1;
            break;
        }
        case 1: {
            if ((int6 == 0)) {
                int22 = 1;
            };
            int22 = (int22 - int34);
            break;
        }
        case 2: {
            int23 = (0 - int20);
            if ((int6 == 1)) {
                int23 = (int23 + 1);
            };
            int24 = 1;
            break;
        }
        case 3: {
            int22 = (0 - int19);
            if ((int6 == 1)) {
                int22 = (int22 + 1);
            };
            break;
        }
    };
    if ((int24 == 1)) {
        if ((int16 > int10)) {
            int16 = int10;
        };
        int22 = int16;
        if ((int22 < 0)) {
            int22 = (int22 + ((int19 - 1) + int34));
        };
        int22 = (0 - int22);
    } else {
        if ((int17 > int11)) {
            int17 = int11;
        };
        int23 = int17;
        if ((int23 < 0)) {
            int23 = (int23 + ((int20 - 1) + int35));
        };
        int23 = (0 - int23);
    };
    var int36 = MOVECOORD(varplayer_12916, int22, 0, int23);
    var int37 = MOVECOORD(int36, int21, 0, int21);
    script20779(int37);
    varplayer_12920 = int37;
    script20778(0);
    return;
}