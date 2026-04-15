//
function script7556(int0: int): void {
    var int1 = IF_GETWIDTH(comp(378, 3));
    if ((int1 < int0)) {
        IF_SETSIZE((int1 + 1), IF_GETHEIGHT(comp(378, 3)), 0, 0, comp(378, 3));
    } else {
        IF_SETONTIMER(callback(), comp(378, 1));
    };
    return;
}