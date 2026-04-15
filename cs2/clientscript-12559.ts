//
function script12559(int0: int): void {
    var int1 = IF_GETWIDTH(comp(1768, 6));
    if ((int1 < int0)) {
        IF_SETSIZE((int1 + 1), 13, 0, 0, comp(1768, 6));
    } else if ((int1 > int0)) {
        IF_SETSIZE((int1 - 1), 13, 0, 0, comp(1768, 6));
    };
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), comp(1768, 6));
        return;
    };
    IF_SETONTIMER(callback(script12559, int0), comp(1768, 6));
    return;
}