//
function script6308(int0: number): void {
    var int1 = ((IF_GETWIDTH(comp(1587, 0)) - 800) - 16);
    IF_SETPOSITION(0, 30, 0, 0, comp(1587, 18));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 20));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 28));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 36));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 44));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 52));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 60));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 68));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 22));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 30));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 38));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 46));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 54));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 62));
    IF_SETSIZE((240 + int1), 0, 0, 1, comp(1587, 45));
    IF_SETPOSITION((655 + int1), 0, 0, 0, comp(1587, 53));
    IF_SETPOSITION((736 + int1), 0, 0, 0, comp(1587, 61));
    IF_SETSIZE(20, 74, 0, 1, int0);
    if ((script6431() == 1)) {
        IF_SETSIZE(0, 450, 1, 0, comp(1587, 0));
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1587, 0));
    };
    return;
}