//
function script14242(int0: struct, int1: struct, int2: unknown_int): struct {
    switch (int1) {
        case 21255: {
            if ((int2 == 0)) {
                return script16574(int0);
            };
            break;
        }
        case 39928:
        case 39932:
        case 28510: {
            if ((int2 == 0)) {
                return 39929 as struct;
            };
            break;
        }
    };
    var int3 = -1 as struct;
    if ((int2 == 0)) {
        int3 = struct_getparam(int1, 3795);
        if ((int3 != -1 as struct)) {
            return int3;
        };
    };
    return -1 as struct;
}