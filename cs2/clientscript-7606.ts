//
function script7606(): obj {
    var int0 = INV_GETOBJ(94 as inv, 3);
    if ((int0 == -1 as obj)) {
        return -1 as obj;
    };
    var int1 = item_getparam(int0, 686);
    var int2 = script7602(int1);
    return int2;
}