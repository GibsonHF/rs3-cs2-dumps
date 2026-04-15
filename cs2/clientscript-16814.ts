//
function script16814(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    if ((DB_GETROWTABLE(int0) != 197)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 806960, 0);
    var int2 = dbrow_getfield(int0, 806976, 0);
    var int3 = dbrow_getfield(int0, 806992, 0);
    IF_SETONTIMER(callback(script16813, int0, int1, int2, int3), int1);
    return;
}