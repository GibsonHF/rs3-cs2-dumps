//
function script7622(int0: int, int1: int, int2: int, int3: dbrow, int4: int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string, string10: string, string11: string, string12: string, string13: string, string14: string, string15: string, string16: string, string17: string, string18: string, string19: string): int {
    CC_DELETEALL(comp(850, 1));
    CC_DELETEALL(comp(850, 2));
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var string20 = "null";
    var string21 = "null";
    var int8 = 0;
    while ((++int5 < int0)) {
        [int7, string20, string21] = script7625(int3, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9, string10, string11, string12, string13, string14, string15, string16, string17, string18, string19, int5);
        if ((int7 == 1)) {
            [int6, int8] = script7623(int6, int8, string20, string21, script9670(int5, int4), TESTBIT(int1, (int5 + 1)), TESTBIT(int2, (int5 + 1)));
        };
    };
    return int8;
}