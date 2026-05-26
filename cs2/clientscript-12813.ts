//
function script12813(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number): void {
    var int12 = 1;
    var int13 = 0;
    if ((int10 != -1)) {
        int12 = 6;
    } else if ((int8 != -1)) {
        int12 = 5;
    } else if ((int6 != -1)) {
        int12 = 4;
    } else if ((int4 != -1)) {
        int12 = 3;
    } else if ((int2 != -1)) {
        int12 = 2;
    } else if ((int0 != -1)) {
        int12 = 1;
    } else {
        return;
    };
    var int14 = -1;
    var int15 = 0;
    var int16 = 8;
    var int17 = 0;
    while ((int13 < int12)) {
        CC_CREATE(117571585, 5, int13);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(int16, int17, 0, 1);
        int16 = ((int16 + 36) + 8);
        switch (int13) {
            case 0: {
                int14 = int0;
                int15 = int1;
                break;
            }
            case 1: {
                int14 = int2;
                int15 = int3;
                break;
            }
            case 2: {
                int14 = int4;
                int15 = int5;
                break;
            }
            case 3: {
                int14 = int6;
                int15 = int7;
                break;
            }
            case 4: {
                int14 = int8;
                int15 = int9;
                break;
            }
            case 5: {
                int14 = int10;
                int15 = int11;
                break;
            }
            default: {
                return;
            }
        };
        CC_SETOBJECT(int14, int15);
        CC_SETOPBASE(`<col=ff9040>${OC_NAME(int14)}`);
        CC_SETOP(1, "Examine");
        CC_SETOUTLINE(1);
        cc_setparam(4009, int14);
        CC_SETONMOUSEREPEAT(callback(script9564, int14, -2147483645, CC_GETID()));
        CC_SETONMOUSELEAVE(callback(script9300, -2147483645, -2147483643));
        int13 = (int13 + 1);
    };
    return;
}