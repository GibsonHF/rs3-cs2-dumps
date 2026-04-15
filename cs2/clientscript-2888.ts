//
function script2888(): void {
    if ((GETWINDOWMODE() >= 2)) {
        IF_SETPOSITION(0, 287, 0, 0, comp(476, 56));
        IF_SETPOSITION(0, 254, 0, 0, comp(476, 55));
    } else {
        IF_SETPOSITION(18, 40, 2, 0, comp(476, 56));
        IF_SETPOSITION(18, 7, 2, 0, comp(476, 55));
    };
    return;
}