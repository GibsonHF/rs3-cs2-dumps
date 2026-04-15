//
function script13186(int0: struct): int {
    var int1 = -1;
    var int2 = -1 as obj;
    if (((int0 != -1 as struct) && (struct_getparam(int0, 2531) == 2))) {
        if ((struct_getparam(int0, 4397) != -1)) {
            int2 = script9964(int0);
        };
        if ((int2 != -1 as obj)) {
            int1 = OC_WEARPOS(int2);
        } else {
            int1 = struct_getparam(int0, 2532);
        };
    };
    return int1;
}