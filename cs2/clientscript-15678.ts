//
function script15678(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int2, int1, int3] = WINDOW_GETINSETS();
    IF_SETPOSITION(int0, int2, 0, 0, comp(744, 26));
    IF_SETSIZE((int0 + int1), (int2 + int3), 1, 1, comp(744, 26));
    var int4 = ((IF_GETWIDTH(comp(744, 0)) - IF_GETX(comp(744, 39))) - IF_GETWIDTH(comp(744, 39)));
    IF_SETPOSITION((((int1 + int4) + IF_GETWIDTH(comp(744, 39))) + 16), (int2 + 32), 2, 0, comp(744, 186));
    return;
}