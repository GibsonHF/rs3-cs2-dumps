//
function script12823(int0: int, int1: unknown_int): int {
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as struct;
    var int6 = -1 as cs2enum;
    switch (int0) {
        case 1: {
            int6 = 11780 as cs2enum;
            break;
        }
        case 2: {
            int6 = 11785 as cs2enum;
            break;
        }
        case 3: {
            int6 = 11783 as cs2enum;
            break;
        }
        default: {
            return 0;
        }
    };
    var int7 = enum_getvalue(0, 26, int6, int2);
    while ((int7 != -1 as cs2enum)) {
        if (((int0 != 2) || ((((int0 == 2) && (int1 == 1)) && (int2 != 5)) || ((int1 == 0) && (int2 == 5))))) {
            int5 = enum_getvalue(0, 73, int7, int3);
            while ((int5 != -1 as struct)) {
                if ((script12821(int0, int2, int3) == 1)) {
                    int4 = (int4 + 1);
                };
                int3 = (int3 + 1);
                int5 = enum_getvalue(0, 73, int7, int3);
            };
        };
        int3 = 0;
        int2 = (int2 + 1);
        int7 = enum_getvalue(0, 26, int6, int2);
    };
    return int4;
}