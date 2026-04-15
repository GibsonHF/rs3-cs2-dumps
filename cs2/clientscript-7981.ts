//
function script7981(int0: struct): unknown_int {
    if ((int0 == -1 as struct)) {
        return -1;
    };
    var int1 = -1;
    var int2 = -1;
    var int3 = 1;
    var int4 = 1;
    switch (struct_getparam(int0, 2806)) {
        case 1:
        case 2: {
            int1 = 1;
            break;
        }
        case 3: {
            int1 = 5;
            break;
        }
        case 4:
        case 27:
        case 28: {
            int1 = 6;
            break;
        }
        case 29: {
            int1 = 17;
            break;
        }
        case 5: {
            int1 = 3;
            break;
        }
        case 6: {
            int1 = 4;
            break;
        }
        default: {
            return -1;
        }
    };
    int2 = struct_getparam(int0, 2793);
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = -1;
    var int8 = -1;
    while (((int3 != -1) && (int5 == 0))) {
        int4 = 1;
        while (((int4 <= 14) && (int5 == 0))) {
            [int7, int8, int6] = script11797(1003, int4);
            if (((int7 == int1) && (int8 == int2))) {
                int5 = 1;
            };
            int4 = (int4 + 1);
        };
        int3 = script8246(int3, 1, 0);
    };
    return int5;
}