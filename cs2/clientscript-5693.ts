//
function script5693(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    var string0 = "Members only";
    if ((CC_FIND(79823095, int0) == 1)) {
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, 79823099);
        if ((int1 == 1)) {
            string0 = "Level up to unlock this item";
        };
        int2 = (STRINGWIDTH(string0, 26) + 20);
        int3 = ((PARAHEIGHT(string0, int2, 26) * 15) + 10);
        IF_SETSIZE(int2, int3, 0, 0, 79823099);
        IF_SETTEXT(string0, 79823102);
        IF_SETHIDE(0, 79823099);
    };
    return;
}