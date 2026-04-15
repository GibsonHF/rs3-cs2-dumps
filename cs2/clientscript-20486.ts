//
function script20486(int0: component, int1: dbrow, int2: int, int3: int, int4: int, string0: string): void {
    var int5 = script20491(int1);
    var int6 = 1;
    if ((int3 != 0)) {
        int6 = PARAHEIGHT(string0, IF_GETWIDTH(int0), int5);
    } else {
        int6 = PARAHEIGHT(string0, int2, int5);
    };
    if ((int6 > int4)) {
        IF_SETMAXLINES(int4, int0);
        int6 = int4;
    };
    IF_SETTEXT(string0, int0);
    IF_SETSIZE(int2, (int6 * script11432(int5)), int3, 0, int0);
    return;
}