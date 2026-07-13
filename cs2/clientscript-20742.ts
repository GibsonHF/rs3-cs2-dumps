//
function script20742(int0: number): void {
    if ((varbitclient_61229 == 1)) {
        IF_SETPOSITION((-3 - int0), 1639, 0, 3, comp(1512, 7));
        IF_SETPOSITION(((-3 - int0) + IF_GETWIDTH(comp(1512, 7))), 1639, 0, 3, comp(1512, 24));
    } else {
        IF_SETPOSITION(-3, 1639, 0, 3, comp(1512, 7));
        IF_SETPOSITION(((-3 + IF_GETWIDTH(comp(1512, 7))) - 4), 1639, 0, 3, comp(1512, 24));
    };
    return;
}