//
function script6308(int0: component): void {
    var int1 = ((IF_GETWIDTH(comp(1587, 0)) - 800) - 16);
    IF_SETPOSITION(0, 30, 0, 0, comp(1587, 14));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 16));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 21));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 32));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 40));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 48));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 56));
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 64));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 18));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 26));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 34));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 42));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 50));
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 58));
    IF_SETSIZE((240 + int1), 0, 0, 1, comp(1587, 41));
    IF_SETPOSITION((655 + int1), 0, 0, 0, comp(1587, 49));
    IF_SETPOSITION((736 + int1), 0, 0, 0, comp(1587, 57));
    IF_SETSIZE(20, 74, 0, 1, int0);
    if ((script6431() == true)) {
        IF_SETSIZE(0, 450, 1, 0, comp(1587, 0));
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1587, 0));
    };
    return;
}