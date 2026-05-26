//
function script16229(int0: number, int1: number): number {
    var int2 = -1;
    var int3 = -1;
    [int2, int3] = script3529(int0, int1);
    if ((int2 == -1)) {
        return 0;
    };
    if ((IF_HASSUBOVERLAY(int2, 734) == 0)) {
        return 0;
    };
    var int4 = enum_getreverseindex(9, 0, 16363, 48103433, 0);
    IF_TRIGGEROP(int3, int4, 1);
    return 1;
}