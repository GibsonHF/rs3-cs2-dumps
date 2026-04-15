//
function script14944(): unknown_int {
    var int0 = unk10989();
    if ((script11370() == 0)) {
        return 2;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(int0);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int6] = DATE_RUNEDAY_TODATE(script12477());
    if (((int6 - int3) > 18)) {
        return 1;
    };
    if (((int6 - int3) == 18)) {
        if (((int5 - int2) > 0)) {
            return 1;
        };
        if (((int5 - int2) == 0)) {
            if (((int4 - int1) >= 0)) {
                return 1;
            };
            return 0;
        };
        return 0;
    };
    return 0;
}