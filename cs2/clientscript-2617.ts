//
function script2617(int0: obj): [int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as struct;
    var int4 = -1 as obj;
    if ((item_getparam(int0, 2655) == 47066 as obj)) {
        int1 = item_getparam(int0, 5456);
        int2 = script14490(int0, 1);
        return [int1, int2];
    };
    int3 = item_getparam(int0, 2675);
    if ((int3 != -1 as struct)) {
        [int4, int1, int2] = script2615(int3, 1);
        if ((int4 == 47066 as obj)) {
            return [int1, int2];
        };
        [int4, int1, int2] = script2615(int3, 2);
        if ((int4 == 47066 as obj)) {
            return [int1, int2];
        };
    };
    if ((item_getparam(int0, 2656) == 47066 as obj)) {
        int1 = item_getparam(int0, 5457);
        int2 = script14490(int0, 2);
        return [int1, int2];
    };
    int3 = item_getparam(int0, 2676);
    if ((int3 != -1 as struct)) {
        [int4, int1, int2] = script2615(int3, 1);
        if ((int4 == 47066 as obj)) {
            return [int1, int2];
        };
        [int4, int1, int2] = script2615(int3, 2);
        if ((int4 == 47066 as obj)) {
            return [int1, int2];
        };
    };
    return [0, 0];
}