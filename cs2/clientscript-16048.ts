//
function script16048(int0: cs2enum, int1: int): void {
    var int2 = enum_getvalue(0, 73, int0, int1);
    var int3 = struct_getparam(int2, 7437);
    var int4 = struct_getparam(int2, 7439);
    var string0 = struct_getparam(int2, 7434);
    script6197(comp(204, 19), 36, 32, 9, (4 + (int1 * (40 + 1))), int3, int4);
    var int5 = IF_GETNEXTSUBID(comp(204, 19));
    script2995(comp(204, 19), int5, 52, (int1 * (40 + 1)), 0, 0, 52, 40, 1, 0, 2141 as dbrow, string0);
    CC_SETCOLOUR(16777215);
    return;
}