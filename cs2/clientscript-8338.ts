//
function script8338(int0: component): [int, int] {
    var int1 = script8341(int0, 1);
    var int2 = script8341(int0, 2);
    if ((IF_FIND(int0) == 1)) {
        int1 = cc_getparam(3491);
        int2 = cc_getparam(3492);
    };
    return [int1, int2];
}