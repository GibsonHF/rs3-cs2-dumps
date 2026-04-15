//
function script19384(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 1;
    };
    if ((WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 668064, 0)) >= dbrow_getfield(int0, 668080, 0))) {
        return 1;
    };
    return 0;
}