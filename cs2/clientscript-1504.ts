//
function script1504(int0: int, int1: fontmetrics, int2: component, int3: int, string0: string): int {
    var int4 = 0;
    if (((CC_FIND(int2, int3) == 1) || ((int3 == -1) && (IF_FIND(int2) == 1)))) {
        int4 = ((CC_GETWIDTH() - STRINGWIDTH(script1602(string0), int1)) / 2);
        return script1401(int0, string0, int1, int4);
    };
    return STRING_LENGTH(string0);
}