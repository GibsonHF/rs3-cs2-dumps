//
function script5370(int0: unknown_int, int1: unknown_int, string0: string, string1: string): void {
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(951, 14));
    } else {
        IF_SETHIDE(false, comp(951, 14));
    };
    if ((int1 == 1)) {
        IF_SETHIDE(true, comp(951, 2));
    } else {
        IF_SETHIDE(false, comp(951, 2));
    };
    IF_SETTEXT(string0, comp(951, 48));
    IF_SETTEXT(string1, comp(951, 51));
    var int2 = STRINGWIDTH(string1, 28 as fontmetrics);
    IF_SETSIZE((int2 + 16), IF_GETHEIGHT(comp(951, 1)), 0, 0, comp(951, 1));
    int2 = STRINGWIDTH(string0, 28 as fontmetrics);
    IF_SETSIZE((int2 + 16), IF_GETHEIGHT(comp(951, 3)), 0, 0, comp(951, 3));
    int2 = MAX(IF_GETWIDTH(comp(951, 1)), IF_GETWIDTH(comp(951, 3)));
    if ((int1 == 0)) {
        int2 = MAX(int2, IF_GETWIDTH(comp(951, 2)));
    };
    if ((int0 == 0)) {
        int2 = MAX(int2, IF_GETWIDTH(comp(951, 14)));
    };
    IF_SETSIZE((int2 + 48), IF_GETHEIGHT(comp(951, 49)), 0, 0, comp(951, 49));
    var int3 = (IF_GETHEIGHT(comp(951, 1)) + IF_GETHEIGHT(comp(951, 3)));
    if ((int1 == 0)) {
        int3 = (int3 + IF_GETHEIGHT(comp(951, 2)));
    };
    IF_SETSIZE(IF_GETWIDTH(comp(951, 49)), int3, 0, 0, comp(951, 49));
    if ((int0 == 0)) {
        IF_SETPOSITION(0, (7 + IF_GETHEIGHT(comp(951, 49))), 1, 0, comp(951, 14));
    };
    return;
}