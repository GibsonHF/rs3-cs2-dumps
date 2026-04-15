//
function script5241(int0: struct): int {
    var int1 = struct_getparam(int0, 7670);
    var int2 = struct_getparam(int0, 7671);
    if (((int2 > 0) && ((INV_TOTAL(93 as inv, 6714 as obj) > 0) || (INV_TOTAL(94 as inv, 6714 as obj) > 0)))) {
        int2 = (int2 + 2);
    };
    return (int1 + SCALE(script7081(), 100, int2));
}