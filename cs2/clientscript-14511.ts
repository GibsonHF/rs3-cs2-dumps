//
function script14511(int0: dbrow): boolean {
    if ((int0 == -1 as dbrow)) {
        return false;
    };
    var int1 = false;
    var int2 = false;
    [int1, int2] = dbrow_getfield(int0, 344144, 0);
    return int2;
}