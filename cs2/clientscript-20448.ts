//
function script20448(int0: int): unknown_int {
    var int1 = script20424(int0);
    var int2 = WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int1, 1404976, 0));
    var int3 = WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int1, 1404992, 0));
    var int4 = script20429(dbrow_getfield(int1, 1404944, 0));
    if ((((int2 == 1) && (int3 == 0)) && (int4 == 1))) {
        return 1;
    };
    return 0;
}