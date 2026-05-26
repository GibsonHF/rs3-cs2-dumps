//
function script5684(int0: number, int1: number, int2: number): string {
    var int3 = struct_getparam(int0, 7688);
    if ((int3 == -1 as cs2enum)) {
        return "";
    };
    var int4 = enum_getvalue(0, 26, int3, int1);
    return enum_getvalue(0, 36, int4, int2);
}