//
function script13832(int0: component, int1: boolean, int2: int, int3: int): int {
    IF_SETHIDE(int1, int0);
    if ((int1 == false)) {
        IF_SETPOSITION(int3, int2, 0, 0, int0);
        var int2 = (int2 + IF_GETHEIGHT(int0));
    };
    return int2;
}