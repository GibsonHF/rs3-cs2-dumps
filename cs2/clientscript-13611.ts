//
function script13611(): void {
    CC_DELETEALL(comp(1896, 17));
    var int0 = 60;
    var int1 = 28;
    var int2 = ((int0 - int1) / 2);
    if (((CC_FIND(comp(1896, 16), (IF_GETNEXTSUBID(comp(1896, 16)) - 1)) == 1) && (((CC_GETY() + CC_GETHEIGHT()) + int2) > IF_GETHEIGHT(comp(1896, 14))))) {
        IF_SETSCROLLPOS(0, 0, comp(1896, 14));
        IF_SETSCROLLSIZE(0, (((CC_GETY() + CC_GETHEIGHT()) + int2) + 2), comp(1896, 14));
        script7791(comp(1896, 17), comp(1896, 14));
    };
    return;
}