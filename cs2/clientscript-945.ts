//
function script945(int0: int, int1: int, int2: unknown_int): void {
    var int0 = MIN(100, int0);
    int0 = MAX(0, int0);
    var int3 = ((int0 * 25) / 10);
    IF_SETPOSITION(0, (250 - int3), 0, 0, comp(1246, 21));
    IF_SETTEXT(`${inttostring(int1, 10)}%`, comp(1246, 17));
    if ((int2 == 1)) {
        IF_SETPOSITION(32, 217, 0, 0, comp(1246, 5));
        IF_SETPOSITION(32, 167, 0, 0, comp(1246, 6));
    } else if ((int2 == 2)) {
        IF_SETPOSITION(32, 130, 0, 0, comp(1246, 5));
        IF_SETPOSITION(32, 92, 0, 0, comp(1246, 6));
    } else if ((int2 == 3)) {
        IF_SETPOSITION(32, 67, 0, 0, comp(1246, 5));
        IF_SETPOSITION(32, 42, 0, 0, comp(1246, 6));
    };
    return;
}