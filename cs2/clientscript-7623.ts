//
function script7623(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string, string1: string): [number, number] {
    if ((int4 == 0)) {
        var int0 = script13998(55705601, 55705602, 28556, 0, int1, IF_GETWIDTH(55705601), 32, int0, 0, string0, int2);
        if ((CC_FIND(55705602, (int0 - 1)) == 1)) {
            CC_SETOPBASE(`<col=ffffff>${string0}</col>`);
            CC_SETOP(1, "View information");
            CC_SETPARAM_STRING(4618, string0);
            CC_SETPARAM_STRING(4617, string1);
            cc_setparam(8342, int3);
        };
        var int1 = (int1 + (32 + 4));
    } else {
        int0 = script2153(55705601, 55705602, int0);
    };
    return [int0, int1];
}