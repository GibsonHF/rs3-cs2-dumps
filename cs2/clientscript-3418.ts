//
function script3418(int0: dbrow): int {
    var int1 = -1;
    var string0 = "";
    var int2 = -1 as overlayinterface;
    var int3 = comp(-1, 65535);
    var int4 = -1 as struct;
    var int5 = 0;
    while ((++int1 < DB_GETFIELDCOUNT(int0, 634896))) {
        if ((script12653(int0, int1) == 1)) {
            stack(dbrow_getfield(int0, 634896, int1));
            [string0, int2, int3, int4, int4, int4, int4, int5] = stack();
            if ((IF_HASSUBOVERLAY(comp(1477, 744), int2) == 1)) {
                return int1;
            };
        };
    };
    return -1;
}