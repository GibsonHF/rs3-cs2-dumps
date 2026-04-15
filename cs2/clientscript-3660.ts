//
function script3660(int0: int): void {
    IF_SETPOSITION(0, (int0 / 2), 0, 0, comp(634, 13));
    IF_SETPOSITION(0, (int0 * 2), 0, 0, comp(634, 17));
    var int1 = script3608();
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int2 = 0;
    var int3 = ((dbrow_getfield(int1, 299344, 0) / 2) - 1);
    [int2, int2, int3] = dbrow_getfield(int1, 299232, int3);
    int3 = ((int3 - 400) - 20);
    if ((int0 <= int3)) {
        var int0 = ((int0 * 10515) / (2 * int3));
    } else {
        int0 = ((10515 / 2) + (((int0 - int3) * 10515) / (2 * (10515 - int3))));
    };
    script3671(int0, 10515);
    return;
}