//
function script5843(int0: component, int1: int, int2: int): int {
    var int3 = SCALE(IF_GETWIDTH(int0), int1, 100);
    var int4 = SCALE(IF_GETHEIGHT(int0), int2, 100);
    var int5 = MIN(int3, int4);
    return int5;
}