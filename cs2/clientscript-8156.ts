//
function script8156(int0: obj): obj {
    var int1 = enum_getvalue(33, 33, 2541 as cs2enum, int0);
    if ((int1 != -1 as obj)) {
        return int1;
    };
    if (((item_getparam(int0, 5527) != -1 as obj) && (item_getparam(int0, 5772) == 0))) {
        return item_getparam(int0, 5527);
    };
    return int0;
}