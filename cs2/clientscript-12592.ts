//
function script12592(int0: number): number {
    var int1 = dbrow_getfield(int0, 1515792, 0);
    var int2 = dbrow_getfield(int0, 1515808, 0);
    if ((int1 == -1 as var_reference)) {
        script12478(`No unlock var defined on ${dbrow_getfield(int0, 1515536, 0)}`);
        return 0;
    };
    var int3 = WORLDMAP_GETDISPLAYCOORD(int1);
    if ((int3 >= int2)) {
        return 1;
    };
    return 0;
}