//
function script19069(int0: dbrow): unknown_int {
    var int1 = dbrow_getfield(int0, 1187920, 0);
    if ((int1 == -1 as var_reference)) {
        return 1;
    };
    if ((WORLDMAP_GETDISPLAYCOORD(int1) == 0)) {
        return 0;
    };
    return 1;
}