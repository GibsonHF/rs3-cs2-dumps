//
function script11157(int0: dbrow, int1: dbrow, int2: unknown_int): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int3, int4] = dbrow_getfield(int0, 983088, 0);
    [int5, int6] = dbrow_getfield(int1, 983088, 0);
    IF_SETNPCMODEL(dbrow_getfield(int1, 983136, 0), comp(1082, 63));
    IF_SETNPCMODEL(dbrow_getfield(int0, 983136, 0), comp(1082, 83));
    IF_SETMODELANGLE(dbrow_getfield(int1, 983232, 0), comp(1082, 63));
    IF_SETMODELANGLE(dbrow_getfield(int0, 983232, 0), comp(1082, 83));
    script19906(int0, int1);
    if ((int2 == 1)) {
        IF_SETMODELANIM(dbrow_getfield(int1, 983152, 0), comp(1082, 63));
        IF_SETMODELANIM(dbrow_getfield(int0, 983152, 0), comp(1082, 83));
    } else {
        IF_SETMODELANIM(dbrow_getfield(int1, 983168, 0), comp(1082, 63));
        IF_SETMODELANIM(dbrow_getfield(int0, 983168, 0), comp(1082, 83));
    };
    IF_SETMODELANIM(dbrow_getfield(int0, 983120, 0), comp(1082, 71));
    IF_SETMODELANIM(dbrow_getfield(int1, 983120, 0), comp(1082, 58));
    IF_SETNPCMODEL(dbrow_getfield(int1, 983056, 0), comp(1082, 58));
    IF_SETNPCMODEL(dbrow_getfield(int0, 983056, 0), comp(1082, 71));
    IF_SETMODELANGLE(dbrow_getfield(int1, 983072, 0), comp(1082, 58));
    IF_SETMODELANGLE(dbrow_getfield(int0, 983072, 0), comp(1082, 71));
    IF_SETPOSITION(int3, int4, 0, 0, comp(1082, 71));
    IF_SETPOSITION(int5, int6, 2, 0, comp(1082, 58));
    IF_SETMODELZOOM(dbrow_getfield(int0, 983104, 0), comp(1082, 71));
    IF_SETMODELZOOM(dbrow_getfield(int1, 983104, 0), comp(1082, 58));
    IF_SETTEXT(dbrow_getfield(int1, 983040, 0), comp(1082, 88));
    IF_SETTEXT(dbrow_getfield(int0, 983040, 0), comp(1082, 72));
    return;
}