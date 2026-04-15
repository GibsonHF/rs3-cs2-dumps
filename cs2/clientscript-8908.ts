//
function script8908(int0: unknown_int, int1: int): void {
    var int2 = enum_getvalue(0, 23, 15584 as cs2enum, int1);
    var int3 = 0;
    if (((int1 != -1) && (enum_hasoutput(23, 15585 as cs2enum, int2) == 1))) {
        int3 = enum_getreverseindex(23, 0, 15585 as cs2enum, int2, 0);
    };
    script5870(int0, int3);
    script9511(1);
    return;
}