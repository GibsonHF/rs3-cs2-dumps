//
function script16927(int0: int, int1: int, int2: int, int3: cs2enum, int4: int, int5: int, string0: string): fontmetrics {
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