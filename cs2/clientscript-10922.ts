//
function script10922(string0: string): void {
    IF_SETTEXT(string0, comp(1581, 6));
    var int0 = (32 + (15 * PARAHEIGHT(string0, IF_GETWIDTH(comp(1581, 6)), 28 as fontmetrics)));
    IF_SETSCROLLSIZE(0, int0, comp(1581, 4));
    script7791(comp(1581, 7), comp(1581, 4));
    return;
}