//
function script17260(int0: struct): int {
    var int1 = -1;
    var int2 = struct_getparam(int0, 9025);
    var int3 = struct_getparam(int0, 9024);
    if (((int3 != -1 as var_reference) && (int2 != -1 as cs2enum))) {
        int1 = enum_getvalue(0, 0, int2, WORLDMAP_GETDISPLAYCOORD(int3));
    } else {
        int1 = struct_getparam(int0, 9023);
    };
    return int1;
}