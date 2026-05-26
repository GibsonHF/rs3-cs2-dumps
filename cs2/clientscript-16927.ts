//
function script16927(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string): number {
    var int6 = int4;
    var int7 = enum_getvalue(0, 25, int3, int6);
    var int8 = PARAWIDTH(string0, int0, int7);
    var int9 = PARAHEIGHT(string0, int0, int7);
    var int10 = (int9 * int6);
    while ((int6 >= int5)) {
        if ((((int10 > int1) || (int8 > int0)) || ((int2 > 0) && (int9 > int2)))) {
            int7 = enum_getvalue(0, 25, int3, int6);
            int8 = PARAWIDTH(string0, int0, int7);
            int9 = PARAHEIGHT(string0, int0, int7);
            int10 = (int9 * int6);
            int6 = (int6 - 1);
        };
    };
    return int7;
}