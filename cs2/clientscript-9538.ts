//
function script9538(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int1, int2, int3] = script2956();
    IF_SETSIZE(0, (60 + int1), 1, 0, comp(274, 1));
    IF_SETSIZE((int0 + int2), (60 + int1), 1, 0, comp(274, 7));
    IF_SETPOSITION(int0, 0, 0, 0, comp(274, 7));
    IF_SETSIZE(0, (IF_GETHEIGHT(comp(274, 0)) - IF_GETHEIGHT(comp(274, 1))), 1, 0, comp(274, 43));
    IF_SETSIZE((240 + int0), 0, 0, 1, comp(274, 182));
    IF_SETSIZE(184, ((48 + int1) + int3), 0, 1, comp(274, 186));
    IF_SETPOSITION(28, (24 + (int1 / 2)), 2, 0, comp(274, 186));
    return;
}