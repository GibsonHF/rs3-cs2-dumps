//
function script20255(int0: dbrow, int1: int, int2: int, int3: int, int4: int, int5: int, int6: boolean): int {
    var int7 = ((int4 * (140 + 15)) + 4);
    var int8 = script12585(script20142(int1));
    var int9 = dbrow_getfield(int0, 1343536, 0);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 1;
    var int14 = 4;
    script15938(comp(1443, 7), int1, 0, int7, 0, 0, 0, 140, 0, 0, 1);
    script10033(int1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4128 as dbrow);
    script10485(int1, 2, 10, 4, 0, 0, 0, 20, 1, 0, 2141 as dbrow, `Tier ${inttostring((int1 + 1), 10)}`);
    CC_SETTEXTALIGN(0, 1, 0);
    script20259(int6, int8);
    script10485(int1, 3, 10, 4, 2, 0, 0, 20, 1, 0, 2141 as dbrow, `${inttostring(int9, 10)} x XP`);
    CC_SETTEXTALIGN(2, 1, 0);
    script20259(int6, int8);
    script15938(comp(1443, 8), 200, int4, 0, 0, 0, 0, 0, 0, 1, 1);
    cc_setparam(9342, int1);
    while ((int10 < int3)) {
        var int5 = script20256(int0, int1, (int2 + int10), int4, int5, int10, int8, int6);
        int10 = (int10 + 1);
    };
    return int5;
}