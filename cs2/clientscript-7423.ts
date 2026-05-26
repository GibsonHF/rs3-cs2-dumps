//
function script7423(): void {
    var int0 = 0;
    var int1 = IF_GETY(comp(1311, 384));
    var int2 = 34;
    var int3 = 0;
    var int4 = (STRINGWIDTH(IF_GETTEXT(comp(1311, 385)), 28 as fontmetrics) + 10);
    var int5 = 0;
    if ((STRINGWIDTH(IF_GETTEXT(comp(1311, 383)), 28 as fontmetrics) > 0)) {
        int3 = (STRINGWIDTH(IF_GETTEXT(comp(1311, 383)), 28 as fontmetrics) + 10);
        int0 = (STRINGWIDTH("-", 28 as fontmetrics) + 10);
        IF_SETTEXT("-", comp(1311, 384));
        int5 = (((int4 + int0) + int3) + 20);
        IF_SETSIZE(int5, IF_GETHEIGHT(comp(1311, 381)), 0, 0, comp(1311, 381));
    } else {
        IF_SETSIZE(int4, IF_GETHEIGHT(comp(1311, 381)), 0, 0, comp(1311, 381));
    };
    IF_SETSIZE(int3, 0, 0, 1, comp(1311, 383));
    IF_SETSIZE(int0, 0, 0, 1, comp(1311, 384));
    IF_SETSIZE(int4, 0, 0, 1, comp(1311, 385));
    if ((STRINGWIDTH(IF_GETTEXT(comp(1311, 383)), 28 as fontmetrics) > 0)) {
        IF_SETPOSITION(IF_GETX(comp(1311, 382)), int1, 0, 0, comp(1311, 383));
        IF_SETPOSITION(((IF_GETX(comp(1311, 383)) + IF_GETWIDTH(comp(1311, 383))) + 15), int1, 0, 0, comp(1311, 384));
        IF_SETPOSITION(((IF_GETX(comp(1311, 384)) + IF_GETWIDTH(comp(1311, 384))) + 5), int1, 0, 0, comp(1311, 385));
    } else {
        IF_SETPOSITION(0, 0, 1, 1, comp(1311, 385));
    };
    return;
}