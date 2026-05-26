//
function script5357(int0: number, int1: number, int2: number, string0: string, string1: string, string2: string, string3: string): void {
    var string4 = "Select";
    var int3 = 65404941;
    var int4 = 65404942;
    switch (int0) {
        case 486: {
            int3 = 31850514;
            int4 = 31850515;
            break;
        }
    };
    script7853(int3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17061, string0, int1, 1, 0, 0);
    if ((STRING_LENGTH(string2) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string2, CC_GETLAYER(), CC_GETID()));
    };
    CC_SETOP(1, string4);
    script7853(int4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17062, string1, int2, 1, 0, 0);
    if ((STRING_LENGTH(string3) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string3, CC_GETLAYER(), CC_GETID()));
    };
    CC_SETOP(1, string4);
    return;
}