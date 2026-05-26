//
function script14025(): void {
    if ((IF_GETHIDE(comp(1934, 19)) == true)) {
        IF_SETHIDE(false, comp(1934, 19));
        IF_SETHIDE(true, comp(1934, 16));
        IF_SETHIDE(true, comp(1934, 15));
    } else {
        IF_SETHIDE(true, comp(1934, 19));
        IF_SETHIDE(false, comp(1934, 16));
        IF_SETHIDE(false, comp(1934, 15));
    };
    return;
}