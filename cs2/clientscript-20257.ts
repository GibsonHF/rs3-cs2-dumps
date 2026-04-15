//
function script20257(int0: dbrow, int1: int, int2: int, int3: int, int4: int, int5: boolean, int6: boolean, int7: unknown_int): int {
    var int8 = dbrow_getfield(int0, 1343504, int2);
    var int9 = script20144(int8);
    var int10 = int5;
    var int11 = true;
    var string0 = dbrow_getfield(int8, 1347584, 0);
    var int12 = dbrow_getfield(int8, 1347632, 0);
    var int13 = 35297 as graphic;
    var int14 = 35298;
    var int15 = 17064 as dbrow;
    var int16 = 0;
    if ((int7 == 0)) {
        int16 = 12;
    };
    if ((int9 == true)) {
        int13 = 35301 as graphic;
        int14 = 35302;
    } else {
        int11 = false;
        if ((int10 == true)) {
            int15 = 17064 as dbrow;
            int12 = dbrow_getfield(int8, 1347648, 0);
        };
    };
    script20258(string0, int1, int2, int7);
    script7862((int1 + 100), int2, 0, 0, 1, 0, int16, 0, 1, 1, int15, "", true, 1, true, int11);
    script20258(string0, int1, int2, int7);
    CC_GETDYNAMICLAYER();
    script7918(0, int3++, 0, 4, 1, 0, 44, 40, 0, 0, int13);
    CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, int14));
    CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, int13));
    script7918(0, int3++, 0, (4 + 4), 1, 0, 32, 32, 0, 0, int12);
    switch (int7) {
        case 2: {
            script7918(0, int3++, 4, -10, 2, 1, 24, 24, 0, 0, 9408 as graphic);
            break;
        }
        case 3: {
            script7918(0, int3++, 4, -10, 0, 1, 24, 24, 0, 0, 9403 as graphic);
            break;
        }
    };
    script10485(0, int3++, 0, 2, 1, 2, (int16 + 4), 32, 1, 0, 2141 as dbrow, string0);
    CC_SETTEXTALIGN(1, 1, 16);
    CC_SETMAXLINES(2);
    script20259(int9, int10);
    return int3;
}