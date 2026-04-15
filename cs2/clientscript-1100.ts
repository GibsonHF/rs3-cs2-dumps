//
function script1100(int0: int): int {
    var int1 = 40;
    IF_SETPOSITION(0, int0, 0, 0, comp(91, 12));
    IF_SETSIZE(0, int1, 1, 0, comp(91, 12));
    return (int0 + int1);
}