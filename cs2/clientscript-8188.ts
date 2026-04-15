//
function script8188(int0: obj): obj {
    var int1 = -1 as obj;
    if ((int0 != -1 as obj)) {
        int1 = enum_getvalue(33, 33, 2541 as cs2enum, int0);
        if ((((int1 == -1 as obj) && (item_getparam(int0, 5527) != -1 as obj)) && (item_getparam(int0, 5772) == 0))) {
            int1 = item_getparam(int0, 5527);
        };
    };
    return int1;
}