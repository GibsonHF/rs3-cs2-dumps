//
function script6252(int0: number): number {
    var int1 = dbrow_getfield(int0, 668064, 0);
    var int2 = dbrow_getfield(int0, 668080, 0);
    var int3 = dbrow_getfield(int0, 668096, 0);
    if ((WORLDMAP_GETDISPLAYCOORD(int1) < int2)) {
        return 0;
    };
    if (((int3 == 1) && (PLAYERMEMBER() == 0))) {
        return 0;
    };
    return 1;
}