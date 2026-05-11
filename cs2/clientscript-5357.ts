//
function script5357(int0: unknown_int, int1: boolean, int2: boolean, string0: string, string1: string, string2: string, string3: string): void {
    var string4 = "Select";
    var int3 = comp(998, 13);
    var int4 = comp(998, 14);
    switch (int0) {
        case 486: {
            int3 = comp(486, 18);
            int4 = comp(486, 19);
            break;
        }
    };
    script7853(int3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17061 as dbrow, string0, int1, 1, false, false);
    if ((STRING_LENGTH(string2) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string2, CC_GETLAYER(), CC_GETID()));
    };
    CC_SETOP(1, string4);
    script7853(int4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062 as dbrow, string1, int2, 1, false, false);
    if ((STRING_LENGTH(string3) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string3, CC_GETLAYER(), CC_GETID()));
    };
    CC_SETOP(1, string4);
    return;
}