//
function script3418(int0: number): number {
    var int1 = -1;
    var string0 = "";
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    int1 = (int1 + 1);
    while ((int1 < DB_GETFIELDCOUNT(int0, 634896))) {
        if ((script12653(int0, int1) == 1)) {
            [string0, int2, int3, int4, int4, int4, int4, int5] = dbrow_getfield(int0, 634896, int1);
            if ((IF_HASSUBOVERLAY(comp(1477, 744), int2) == 1)) {
                return int1;
            };
        };
    };
    return -1;
}