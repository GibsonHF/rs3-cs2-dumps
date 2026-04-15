//
function script15910(int0: struct, int1: unknown_int): [string, string] {
    var int2 = -1;
    var int3 = -1;
    if ((int0 != -1 as struct)) {
        int2 = struct_getparam(int0, 8271);
        int3 = struct_getparam(int0, 8272);
    };
    var string0 = script15911(int2, int1);
    var string1 = script15911(int3, int1);
    return [string0, string1];
}