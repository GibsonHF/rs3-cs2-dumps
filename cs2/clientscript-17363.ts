//
function script17363(): obj {
    var int0 = ENUM_GETOUTPUTCOUNT(17234 as cs2enum);
    var int1 = -1 as obj;
    var int2 = -1;
    while ((++int2 < int0)) {
        int1 = enum_getvalue(0, 33, 17234 as cs2enum, int2);
        if ((script6488(item_getparam(int1, 4414)) == 0)) {
            return int1;
        };
    };
    return -1 as obj;
}