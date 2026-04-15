//
function script17869(int0: dbrow, int1: int): int {
    var int2 = script17870(int0, int1);
    if ((int2 == -1 as var_reference)) {
        script12478("Invalid ref.");
        return 0;
    };
    return WORLDMAP_GETDISPLAYCOORD(int2);
}