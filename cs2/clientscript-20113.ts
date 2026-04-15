//
function script20113(int0: int): void {
    var string0 = `Time Remaining: ${script3354(int0, 1, "Finished!")}`;
    var int1 = PARAWIDTH(string0, 1000, 211 as fontmetrics);
    IF_SETSIZE((MAX((int1 + 9), 237) + 23), IF_GETHEIGHT(comp(843, 11)), 0, 0, comp(843, 11));
    IF_SETTEXT(string0, comp(843, 8));
    return;
}