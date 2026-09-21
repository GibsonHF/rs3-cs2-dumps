//
function script6236(): void {
    var int1 = dbrow_getfield(int0, 1577008, 0);
    var int2 = dbrow_getfield(int0, 1577024, 0);
    if ((int1 == -1 as var_reference)) {
        script12478(`No unlock var defined on ${dbrow_getfield(int0, 1576960, 0)}`);
        stack(0);
        return;
    };
    var int3 = WORLDMAP_GETDISPLAYCOORD(int1);
    if ((int3 >= int2)) {
        stack(1);
        return;
    };
    stack(0);
    return;
}