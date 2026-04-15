//
function script18109(int0: int): void {
    if ((int0 > IF_GETHEIGHT(comp(403, 9)))) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(403, 9)), (int0 + 10), comp(403, 9));
        script7791(comp(403, 11), comp(403, 9));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(403, 9));
        CC_DELETEALL(comp(403, 11));
    };
    return;
}