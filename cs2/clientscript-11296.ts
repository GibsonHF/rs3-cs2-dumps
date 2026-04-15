//
function script11296(int0: struct): int {
    var int1 = struct_getparam(int0, 8115);
    var int2 = struct_getparam(int0, 8114);
    int1 = (int1 + enum_getvalue(0, 0, 13485 as cs2enum, int2));
    return MAX(0, int1);
}