//
function script5241(int0: number): number {
    var int1 = struct_getparam(int0, 7670);
    var int2 = struct_getparam(int0, 7671);
    if (((int2 > 0) && ((INV_TOTAL(93, 6714) > 0) || (INV_TOTAL(94, 6714) > 0)))) {
        int2 = (int2 + 2);
    };
    return (int1 + SCALE(script7081(), 100, int2));
}