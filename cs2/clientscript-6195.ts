//
function script6195(int0: int): [struct, int, int] {
    var int1 = enum_getvalue(0, 73, 11807 as cs2enum, int0);
    if ((int1 == -1 as struct)) {
        return [-1 as struct, -1, -1];
    };
    var int2 = -1;
    var int3 = -1;
    int3 = struct_getparam(int1, 7180);
    int2 = struct_getparam(int1, 5799);
    return [int1, int3, int2];
}