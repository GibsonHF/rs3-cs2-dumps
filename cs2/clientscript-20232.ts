//
function script20232(int0: int, int1: int): void {
    var int2 = 46;
    var int3 = 20;
    IF_SETSIZE(0, ((int0 + int2) + (4 * 2)), 1, 0, comp(1401, 32));
    IF_SETSIZE(0, (((int0 + int2) + (4 * 2)) + int3), 1, 1, comp(1401, 31));
    IF_SETSIZE(8, int1, 1, 0, comp(1401, 41));
    IF_SETSIZE(8, (int1 + (4 * 2)), 1, 1, comp(1401, 40));
    return;
}