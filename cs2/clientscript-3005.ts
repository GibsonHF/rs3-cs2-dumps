//
function script3005(int0: inv, int1: int): [int, int, int] {
    if ((INV_GETOBJ(int0, int1) == -1 as obj)) {
        return [0, 0, 0];
    };
    var int2 = script7319(int1);
    var int3 = AND(int2, 8191);
    var int4 = script7317(int0, int1);
    if ((int4 == 10)) {
        return [100, 4000, 4000];
    };
    var int5 = enum_getvalue(0, 0, 9625 as cs2enum, int4);
    var int6 = enum_getvalue(0, 0, 9625 as cs2enum, MIN(10, (int4 + 1)));
    var int7 = SCALE(100, (int6 - int5), (MIN(int3, 4000) - int5));
    return [int7, (MIN(int3, 4000) - int5), (int6 - int5)];
}