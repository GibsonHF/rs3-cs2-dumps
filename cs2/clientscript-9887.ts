//
function script9887(int0: obj, int1: int): int {
    if ((int1 <= 0)) {
        return 0;
    };
    var int2 = enum_getvalue(33, 0, 259 as cs2enum, int0);
    if ((int2 != 0)) {
        return (int2 * int1);
    };
    return (INVPOW((script17369(int0) * int1), 2) * 10);
}