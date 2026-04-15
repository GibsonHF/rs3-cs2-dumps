//
function script626(int0: int): int {
    var int1 = enum_getvalue(0, 74, 16852 as cs2enum, int0);
    if ((int1 == -1 as dbrow)) {
        return 0;
    };
    return dbrow_getfield(int1, 884736, 0);
}