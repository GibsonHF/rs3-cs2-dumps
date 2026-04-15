//
function script20658(int0: struct): boolean {
    if ((int0 == -1 as struct)) {
        return false;
    };
    var int1 = struct_getparam(int0, 4717);
    if ((int1 == -1 as cs2enum)) {
        return struct_getparam(int0, 1331);
    };
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    var int3 = -1;
    var int4 = -1 as struct;
    while ((++int3 < int2)) {
        int4 = enum_getvalue(0, 73, int1, int3);
        if (((int4 != -1 as struct) && (struct_getparam(int4, 1331) == true))) {
            return true;
        };
    };
    return false;
}