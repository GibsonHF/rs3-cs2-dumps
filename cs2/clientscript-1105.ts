//
function script1105(int0: int): int {
    var int1 = 90;
    var int2 = 30;
    if ((script6431() == true)) {
        int2 = 40;
        int1 = (int1 + 30);
    };
    IF_SETPOSITION(0, int0, 0, 0, comp(91, 15));
    IF_SETSIZE(0, int1, 1, 0, comp(91, 15));
    IF_SETPOSITION(0, 0, 0, 0, comp(91, 37));
    IF_SETSIZE(0, int2, 1, 0, comp(91, 37));
    IF_SETPOSITION(0, int2, 0, 0, comp(91, 48));
    IF_SETSIZE(0, int2, 1, 0, comp(91, 48));
    IF_SETPOSITION(0, (int2 * 2), 0, 0, comp(91, 50));
    IF_SETSIZE(0, int2, 1, 0, comp(91, 50));
    return ((int0 + int1) - 5);
}