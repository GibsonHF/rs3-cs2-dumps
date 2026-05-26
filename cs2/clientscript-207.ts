//
function script207(): void {
    if ((IF_GETHIDE(comp(628, 6)) == true)) {
        IF_SETOP(1, "Close key", comp(628, 2));
        IF_SETHIDE(false, comp(628, 6));
    } else {
        IF_SETOP(1, "Open key", comp(628, 2));
        IF_SETHIDE(true, comp(628, 6));
    };
    return;
}