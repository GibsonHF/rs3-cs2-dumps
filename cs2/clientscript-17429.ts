//
function script17429(int0: obj, int1: int): int {
    if (((int0 == -1 as obj) || (script17428() == 0))) {
        return int1;
    };
    var int2 = enum_hasoutput(33, 16719 as cs2enum, int0);
    var int3 = enum_hasoutput(33, 17429 as cs2enum, int0);
    if (((int2 == 1) || (int3 == 1))) {
        return (int1 * 2);
    };
    var int4 = enum_hasoutput(33, 16719 as cs2enum, item_getparam(int0, 2655));
    var int5 = enum_hasoutput(33, 17429 as cs2enum, item_getparam(int0, 2655));
    if (((int4 == 1) || (int5 == 1))) {
        return (int1 * 2);
    };
    return int1;
}