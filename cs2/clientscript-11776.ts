//
function script11776(int0: dbrow, int1: int): [string, component, struct, struct, struct, struct, int] {
    var string0 = "";
    var int2 = -1 as overlayinterface;
    var int3 = comp(-1, 65535);
    var int4 = -1 as struct;
    var int5 = -1 as struct;
    var int6 = -1 as struct;
    var int7 = -1 as struct;
    var int8 = 0;
    if ((script12653(int0, int1) == 1)) {
        stack(dbrow_getfield(int0, 634896, int1));
        [string0, int2, int3, int4, int5, int6, int7, int8] = stack();
    };
    return [string0, int3, int4, int5, int6, int7, int8];
}