//
function script7623(int0: int, int1: int, int2: int, int3: int, int4: int, string0: string, string1: string): [int, int] {
    if ((int4 == 0)) {
        var int0 = script13998(comp(850, 1), comp(850, 2), 28556 as struct, 0, int1, IF_GETWIDTH(comp(850, 1)), 32, int0, false, string0, int2);
        if ((CC_FIND(comp(850, 2), (int0 - 1)) == 1)) {
            CC_SETOPBASE(`<col=ffffff>${string0}</col>`);
            CC_SETOP(1, "View information");
            CC_SETPARAM_STRING(4618, string0);
            CC_SETPARAM_STRING(4617, string1);
            cc_setparam(8342, int3);
        };
        var int1 = (int1 + (32 + 4));
    } else {
        int0 = script2153(comp(850, 1), comp(850, 2), int0);
    };
    return [int0, int1];
}