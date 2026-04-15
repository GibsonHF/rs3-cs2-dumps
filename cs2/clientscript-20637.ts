//
function script20637(int0: int, int1: int, int2: int): int {
    var int3 = script5276(int1, 3);
    var int4 = ((int3 * 176) + ((int3 + 1) * 8));
    if ((CC_FIND(comp(1498, 2), int2) == 1)) {
        CC_SETSIZE(0, int4, 1, 0);
    };
    return (int0 + int4);
}