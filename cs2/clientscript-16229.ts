//
function script16229(int0: dbrow, int1: int): unknown_int {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    [int2, int3] = script3529(int0, int1);
    if ((int2 == comp(-1, 65535))) {
        return 0;
    };
    if ((IF_HASSUBOVERLAY(int2, 734 as overlayinterface) == 0)) {
        return 0;
    };
    var int4 = enum_getreverseindex(9, 0, 16363 as cs2enum, 48103433, 0);
    IF_TRIGGEROP(int3, int4, 1);
    return 1;
}