//
function script7556(int0: number): void {
    var int1 = IF_GETWIDTH(24772611);
    if ((int1 < int0)) {
        IF_SETSIZE((int1 + 1), IF_GETHEIGHT(24772611), 0, 0, 24772611);
    } else {
        IF_SETONTIMER(callback(), 24772609);
    };
    return;
}