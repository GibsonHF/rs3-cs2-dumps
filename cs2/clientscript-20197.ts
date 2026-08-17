//
function script20197(int0: number): void {
    var int15 = 51;
    var int16 = 64;
    script7853(int2, int7, int8, int9, 0, 0, 80, 72, 0, 0, int12, "", 1, 1, 1, script6428(varbitclient_61876, int7));
    CC_SETOP(1, "Select");
    if ((int7 == 0)) {
        int15 = 51;
        int16 = 64;
        CC_SETOP(2, "Apply to all");
        CC_SETONMOUSEREPEAT(callback(script9564, int13, -2147483645, -2147483643));
    } else {
        if ((int10 == 0)) {
            CC_SETOP(2, "Apply to all");
        } else {
            switch (int11) {
                case 1: {
                    int15 = 50;
                    int16 = 67;
                    break;
                }
                case 2: {
                    CC_SETOP(1, "Go to marketplace");
                    CC_SETOP(2, "Select");
                    int15 = 50;
                    int16 = 66;
                    break;
                }
            };
        };
        CC_SETONMOUSEREPEAT(callback(script14732, string0, string1, -2147483645, -2147483643));
    };
    CC_SETONOP(callback(script20198, int0, int1, int2, int3, int4, int5, int7, int6, int12));
    script17949(int3, int7, (int8 + 12), (int9 + 8), 0, 0, 63, 56, 0, 0, int13, 1);
    if ((int10 == 1)) {
        CC_SETTRANS(175);
    };
    if ((int14 > 1)) {
        script2995(int4, int7, (int8 + 8), (int9 + 8), 0, 0, 63, 13, 0, 0, 2100, script17372(INT_TO_LONG(int14), 3, 1));
    };
    if ((int5 != -1)) {
        script20480(int5, int7, (int8 + 8), (int9 + int15), 0, 0, int16, 13, 0, 0, 2100, string2, -1, 2, 1);
    };
    return;
}