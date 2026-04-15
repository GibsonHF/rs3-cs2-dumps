//
function script16704(int0: boolean, int1: boolean, string0: string, string1: string, string2: string, string3: string): void {
    var string4 = "Select";
    script7853(comp(998, 13), 0, 0, 0, 0, 0, 0, 0, 1, 1, 17061 as dbrow, string0, int0, 1, false, false);
    if ((STRING_LENGTH(string2) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string2, CC_GETLAYER(), CC_GETID()));
    };
    CC_SETOP(1, string4);
    script7853(comp(998, 14), 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062 as dbrow, string1, int1, 1, false, false);
    if ((STRING_LENGTH(string3) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string3, CC_GETLAYER(), CC_GETID()));
    };
    CC_SETOP(1, string4);
    return;
}