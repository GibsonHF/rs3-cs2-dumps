//
function script1436(): void {
    IF_SETPOSITION(RANDOM((IF_GETWIDTH(comp(458, 6)) - IF_GETWIDTH(comp(458, 20)))), RANDOM((IF_GETHEIGHT(comp(458, 6)) - IF_GETHEIGHT(comp(458, 20)))), 0, 0, comp(458, 20));
    IF_SET2DANGLE(((RANDOM(4) * 16384) - 1), comp(458, 23));
    return;
}