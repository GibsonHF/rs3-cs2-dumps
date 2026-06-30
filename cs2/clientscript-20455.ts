//
function script20455(int0: number, int1: number): [number, number] {
    var int2 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    var int3 = STAT_BASE(int2);
    var int4 = script20454(int3);
    var int5 = (int4 * int1);
    var int6 = script11151(int2);
    var int7 = (int6 + int5);
    var int8 = 0;
    if ((int7 > 1000000000)) {
        int5 = (1000000000 - int6);
        int8 = 1;
    };
    int5 = MAX(1, (int5 / 10));
    return [int5, int8];
}