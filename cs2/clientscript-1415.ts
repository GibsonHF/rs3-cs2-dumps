//
function script1415(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    while ((int0 <= INV_SIZE(93 as inv))) {
        CC_CREATE(comp(323, 3), 5, int0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((5 + (40 * int1)), (40 * int2), 0, 0);
        if ((INV_GETOBJ(93 as inv, int0) != -1 as obj)) {
            CC_SETOBJECT(INV_GETOBJ(93 as inv, int0), INV_GETNUM(93 as inv, int0));
            CC_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(93 as inv, int0))}`);
            CC_SETOP(1, "<col=00ff00>Value");
            CC_SETOP(2, "Pack <col=ff0000>1");
            CC_SETOP(3, "Pack <col=ff0000>5");
            CC_SETOP(4, "Pack <col=ff0000>All");
            CC_SETOP(5, "Pack <col=ff0000>X");
            CC_SETOP(10, "Examine");
        };
        int0 = (int0 + 1);
        if ((++int1 > 6)) {
            int1 = 0;
            int2 = (int2 + 1);
        };
    };
    return;
}