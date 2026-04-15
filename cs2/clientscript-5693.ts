//
function script5693(int0: int, int1: unknown_int): void {
    var int2 = 0;
    var int3 = 0;
    var string0 = "Members only";
    if ((CC_FIND(comp(1218, 247), int0) == 1)) {
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, comp(1218, 251));
        if ((int1 == 1)) {
            string0 = "Level up to unlock this item";
        };
        int2 = (STRINGWIDTH(string0, 26 as fontmetrics) + 20);
        int3 = ((PARAHEIGHT(string0, int2, 26 as fontmetrics) * 15) + 10);
        IF_SETSIZE(int2, int3, 0, 0, comp(1218, 251));
        IF_SETTEXT(string0, comp(1218, 254));
        IF_SETHIDE(false, comp(1218, 251));
    };
    return;
}