//
function script13283(int0: struct): struct {
    if ((int0 == -1 as struct)) {
        return -1 as struct;
    };
    var int1 = 0;
    var int2 = struct_getparam(int0, 6429);
    if ((int2 == -1 as cs2enum)) {
        return -1 as struct;
    };
    var int3 = ENUM_GETOUTPUTCOUNT(int2);
    var int4 = -1 as struct;
    while ((int1 <= int3)) {
        int4 = enum_getvalue(0, 73, int2, int1);
        if ((script13280(int4) != -2)) {
            switch (struct_getparam(int0, 6428)) {
                case 1: {
                    if ((int1 == 0)) {
                        int4 = -1 as struct;
                    } else {
                        int4 = enum_getvalue(0, 73, int2, (int1 - 1));
                    };
                    int1 = int3;
                    break;
                }
                case 2: {
                    if ((int1 == int3)) {
                        int4 = -1 as struct;
                    };
                    int1 = int3;
                    break;
                }
            };
        };
        int1 = (int1 + 1);
    };
    return int4;
}