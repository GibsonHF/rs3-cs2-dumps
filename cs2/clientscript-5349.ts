//
function script5349(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, string0: string): number {
    var int10 = 0;
    switch (int8) {
        case 0: {
            int10 = script20478(string0, int7, 2100, 0);
            break;
        }
        case 1: {
            int10 = script20478(string0, (IF_GETWIDTH(int0) - int7), 2100, 0);
            break;
        }
        case 2: {
            int10 = script20478(string0, SCALE(IF_GETWIDTH(int0), 16384, int7), 2100, 0);
            break;
        }
        default: {
            int10 = script20478(string0, IF_GETWIDTH(int0), 2100, 0);
            break;
        }
    };
    IF_CREATECHILD(4, int1, int2, int0);
    CC_SETSIZE(int7, int10, int8, 0);
    CC_SETPOSITION(int3, int4, int5, int6);
    CC_SETTEXT(string0);
    script10644(int9, 1, 1);
    return int10;
}