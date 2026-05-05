//
function script5350(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: unknown_int, int11: dbrow, string0: string): int {
    var int12 = 0;
    switch (int10) {
        case 0: {
            int12 = script20478(string0, int9, 2100 as dbrow, 0);
            break;
        }
        case 1: {
            int12 = script20478(string0, (IF_GETWIDTH(int0) - int9), 2100 as dbrow, 0);
            break;
        }
        case 2: {
            int12 = script20478(string0, SCALE(IF_GETWIDTH(int0), 16384, int9), 2100 as dbrow, 0);
            break;
        }
        default: {
            int12 = script20478(string0, IF_GETWIDTH(int0), 2100 as dbrow, 0);
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