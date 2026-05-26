//
function script5350(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, string0: string): number {
    var int12 = 0;
    switch (int10) {
        case 0: {
            int12 = script20478(string0, int9, 2100, 0);
            break;
        }
        case 1: {
            int12 = script20478(string0, (IF_GETWIDTH(int0) - int9), 2100, 0);
            break;
        }
        case 2: {
            int12 = script20478(string0, SCALE(IF_GETWIDTH(int0), 16384, int9), 2100, 0);
            break;
        }
        default: {
            int12 = script20478(string0, IF_GETWIDTH(int0), 2100, 0);
            break;
        }
    };
    IF_CREATENESTED(4, int1, int2, int3, int4, int0);
    CC_SETSIZE(int9, int12, int10, 0);
    CC_SETPOSITION(int5, int6, int7, int8);
    CC_SETTEXT(string0);
    script10644(int11, 1, 1);
    return int12;
}