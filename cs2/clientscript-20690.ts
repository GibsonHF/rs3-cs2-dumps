//
function script20690(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return -1;
    };
    var int1 = -1 as var_reference;
    int1 = dbrow_getfield(int0, 1445920, 0);
    return WORLDMAP_GETDISPLAYCOORD(int1);
}