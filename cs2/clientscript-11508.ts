//
function script11508(): void {
    if ((script4158() == 0)) {
        return;
    };
    if ((IF_GETHEIGHT(comp(662, 44)) < 245)) {
        IF_SETHIDE(true, comp(662, 77));
        IF_SETHIDE(false, comp(662, 71));
        IF_SETPOSITION(0, 10, 1, 2, comp(662, 69));
        IF_SETPOSITION(0, 56, 1, 2, comp(662, 65));
    } else {
        IF_SETHIDE(false, comp(662, 77));
        IF_SETHIDE(true, comp(662, 71));
        IF_SETPOSITION(0, 56, 1, 2, comp(662, 69));
        IF_SETPOSITION(0, 98, 1, 2, comp(662, 65));
    };
    return;
}