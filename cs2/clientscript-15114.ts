//
function script15114(int0: int): struct {
    var int1 = 0;
    var int2 = -1 as struct;
    var int3 = ENUM_GETOUTPUTCOUNT(11872 as cs2enum);
    while ((int1 < int3)) {
        int2 = enum_getvalue(0, 73, 11872 as cs2enum, int1);
        if ((int2 != -1 as struct)) {
            if (((int0 >= struct_getparam(int2, 6132)) && (int0 <= struct_getparam(int2, 6133)))) {
                return int2;
            };
            int1 = (int1 + 1);
        };
    };
    return -1 as struct;
}