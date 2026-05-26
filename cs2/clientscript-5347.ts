//
function script5347(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, string0: string): number {
    var int9 = 0;
    switch (int7) {
        case 0: {
            int9 = script20478(string0, int6, 2100, 0);
            break;
        }
        case 1: {
            int9 = script20478(string0, (IF_GETWIDTH(int0) - int6), 2100, 0);
            break;
        }
        case 2: {
            int9 = script20478(string0, SCALE(IF_GETWIDTH(int0), 16384, int6), 2100, 0);
            break;
        }
        default: {
            int9 = script20478(string0, IF_GETWIDTH(int0), 2100, 0);
            break;
        }
    };
    CC_CREATE(int0, 4, int1);
    CC_SETSIZE(int6, int9, int7, 0);
    CC_SETPOSITION(int2, int3, int4, int5);
    CC_SETTEXT(string0);
    script10644(int8, 1, 1);
    return int9;
}