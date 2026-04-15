//
function script20432(int0: int, int1: dbrow): unknown_int {
    var int2 = script20423(int0);
    if (((((script20429(int2) == 1) && (WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int1, 1404976, 0)) == 1)) && (WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int1, 1404992, 0)) == 0)) && (script20431(int0) == 1))) {
        return 0;
    };
    return 1;
}