//
function script16040(int0: struct, int1: int): void {
    var int2 = struct_getparam(int0, 7425);
    var int3 = ENUM_GETOUTPUTCOUNT(int2);
    var int4 = script16042(int3);
    if ((script16041(int4) == 1)) {
        script16043();
    };
    script16045();
    var int5 = -1;
    while ((++int5 < int3)) {
        script16046(int0, int2, int5, int1);
    };
    if ((script16041(int4) == 1)) {
        script16044(int4);
    };
    return;
}