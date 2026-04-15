//
function script15836(): void {
    var int0 = SCALE(IF_GETHEIGHT(comp(976, 2)), 9, 16);
    IF_SETSIZE(int0, 0, 0, 1, comp(976, 1));
    IF_SETPOSITION(0, 0, 1, 0, comp(976, 1));
    IF_SETPOSITION(0, 0, 0, 0, comp(976, 12));
    IF_SETPOSITION(IF_GETWIDTH(comp(976, 12)), 0, 0, 0, comp(976, 13));
    IF_SETPOSITION((IF_GETWIDTH(comp(976, 12)) + IF_GETWIDTH(comp(976, 13))), 0, 0, 0, comp(976, 14));
    var int1 = IF_GETHEIGHT(comp(976, 12));
    IF_SETPOSITION(0, int1, 0, 0, comp(976, 15));
    IF_SETPOSITION(IF_GETWIDTH(comp(976, 15)), int1, 0, 0, comp(976, 16));
    IF_SETPOSITION((IF_GETWIDTH(comp(976, 15)) + IF_GETWIDTH(comp(976, 16))), int1, 0, 0, comp(976, 17));
    int1 = (IF_GETY(comp(976, 15)) + IF_GETHEIGHT(comp(976, 15)));
    IF_SETPOSITION(0, int1, 0, 0, comp(976, 18));
    IF_SETPOSITION(IF_GETWIDTH(comp(976, 18)), int1, 0, 0, comp(976, 19));
    IF_SETPOSITION((IF_GETWIDTH(comp(976, 18)) + IF_GETWIDTH(comp(976, 19))), int1, 0, 0, comp(976, 20));
    IF_SETPOSITION(0, 0, 0, 0, comp(976, 9));
    IF_SETPOSITION(IF_GETWIDTH(comp(976, 9)), 0, 0, 0, comp(976, 10));
    IF_SETPOSITION((IF_GETWIDTH(comp(976, 9)) + IF_GETWIDTH(comp(976, 10))), 0, 0, 0, comp(976, 11));
    return;
}