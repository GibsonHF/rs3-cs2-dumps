//
function script17818(): obj {
    var int0 = script20350();
    if ((int0 == -1 as cs2enum)) {
        return -1 as obj;
    };
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = -1 as obj;
    var int3 = -1;
    while ((++int3 < int1)) {
        int2 = enum_getvalue(0, 33, int0, int3);
        if ((script6488(item_getparam(int2, 4414)) == 0)) {
            return int2;
        };
    };
    return -1 as obj;
}