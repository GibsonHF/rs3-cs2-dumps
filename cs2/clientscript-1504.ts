//
function script1504(int0: number, int1: number, int2: number, int3: number, string0: string): number {
    var int4 = 0;
    if (((CC_FIND(int2, int3) == 1) || ((int3 == -1) && (IF_FIND(int2) == 1)))) {
        int4 = ((CC_GETWIDTH() - STRINGWIDTH(script1602(string0), int1)) / 2);
        return script1401(int0, string0, int1, int4);
    };
    return STRING_LENGTH(string0);
}