//
function script5617(int0: int): void {
    if ((IF_GETWIDTH(comp(1198, 1)) >= int0)) {
        IF_SETONTIMER(callback(), comp(1198, 8));
    } else {
        IF_SETSIZE((IF_GETWIDTH(comp(1198, 1)) + 1), IF_GETHEIGHT(comp(1198, 1)), 0, 0, comp(1198, 1));
    };
    return;
}