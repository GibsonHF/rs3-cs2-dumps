//
function script13521(int0: int, int1: int, int2: int, int3: int, int4: unknown_int, int5: unknown_int, int6: unknown_int): void {
    var int7 = IF_GETWIDTH(comp(1639, 3));
    if ((((int3 > 0) && (int7 >= int0)) || ((int3 < 0) && (int7 <= int0)))) {
        IF_SETONTIMER(callback(), comp(1639, 3));
        script8139(1031, int4, int5, int6, int6);
        return;
    };
    IF_SETSIZE((int7 + (int3 * int1)), (IF_GETHEIGHT(comp(1639, 3)) + (int3 * int2)), 0, 0, comp(1639, 3));
    return;
}