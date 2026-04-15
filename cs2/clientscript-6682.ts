//
function script6682(): unknown_int {
    var int0 = ENUM_GETOUTPUTCOUNT(15296 as cs2enum);
    var int1 = 0;
    var int2 = -1 as obj;
    while ((int1 < int0)) {
        int2 = enum_getvalue(0, 33, 15296 as cs2enum, int1);
        if ((script6681(item_getparam(int2, 2655)) == 1)) {
            return 1;
        };
        if ((script6681(item_getparam(int2, 2656)) == 1)) {
            return 1;
        };
        if ((script6681(item_getparam(int2, 2657)) == 1)) {
            return 1;
        };
        int1 = (int1 + 1);
    };
    return 0;
}