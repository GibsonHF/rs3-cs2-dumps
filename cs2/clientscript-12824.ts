//
function script12824(int0: int, int1: int): int {
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = -1 as cs2enum;
    switch (int0) {
        case 1: {
            int5 = 11780 as cs2enum;
            break;
        }
        case 2: {
            int5 = 11785 as cs2enum;
            break;
        }
        case 3: {
            int5 = 11783 as cs2enum;
            break;
        }
        default: {
            return 0;
        }
    };
    var int6 = enum_getvalue(0, 26, int5, int1);
    int4 = enum_getvalue(0, 73, int6, int2);
    while ((int4 != -1 as struct)) {
        if ((script12821(int0, int1, int2) == 1)) {
            int3 = (int3 + 1);
        };
        int2 = (int2 + 1);
        int4 = enum_getvalue(0, 73, int6, int2);
    };
    return int3;
}