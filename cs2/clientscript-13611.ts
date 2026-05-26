//
function script13611(): void {
    CC_DELETEALL(124256273);
    var int0 = 60;
    var int1 = 28;
    var int2 = ((int0 - int1) / 2);
    if (((CC_FIND(124256272, (IF_GETNEXTSUBID(124256272) - 1)) == 1) && (((CC_GETY() + CC_GETHEIGHT()) + int2) > IF_GETHEIGHT(124256270)))) {
        IF_SETSCROLLPOS(0, 0, 124256270);
        IF_SETSCROLLSIZE(0, (((CC_GETY() + CC_GETHEIGHT()) + int2) + 2), 124256270);
        script7791(124256273, 124256270);
    };
    return;
}