//
function script19884(int0: dbrow, int1: int): int {
    if ((int0 == -1 as dbrow)) {
        script12478("No dbrow defined.");
        return 0;
    };
    var int2 = -1 as var_reference;
    var int3 = 1;
    [int2, int3] = script19883(int0, int1);
    if (((int2 != -1 as var_reference) && (WORLDMAP_GETDISPLAYCOORD(int2) >= int3))) {
        return 1;
    };
    return 0;
}