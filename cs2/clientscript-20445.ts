//
function script20445(int0: number, int1: number): void {
    stack(1404944);
    stack(int0);
    DB_FIND(0);
    var int2 = -1;
    var int3 = -1;
    dbrow_findnext();
    int2 = stack();
    if ((int2 == -1)) {
        return;
    };
    int3 = enum_getvalue(0, 23, 745 as cs2enum, dbrow_getfield(int2, 1404960, 0));
    IF_SETGRAPHIC(int3, int1);
    IF_SETONMOUSEREPEAT(callback(script8799, dbrow_getfield(int2, 1404928, 0), -2147483645, -1), int1);
    IF_SETONMOUSELEAVE(callback(script8805), int1);
    return;
}