//
function script20634(int0: number): void {
    if ((int0 > IF_GETHEIGHT(comp(1498, 2)))) {
        IF_SETSCROLLSIZE(0, int0, comp(1498, 2));
        script7791(98172933, 98172930);
        IF_SETHIDE(true, comp(1498, 3));
        IF_SETHIDE(false, comp(1498, 4));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1498, 2));
        IF_SETHIDE(true, comp(1498, 3));
        IF_SETHIDE(true, comp(1498, 4));
    };
    return;
}