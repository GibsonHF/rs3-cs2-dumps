//
function script7136(): void {
    var int0 = 0;
    var int1 = 0;
    if (((IF_FIND(comp(1477, 28)) == 1) && (IF_FIND[1](comp(1477, 805)) == 1))) {
        int0 = (((CC_GETWIDTH() / 2) + CC_GETX()) - (CC_GETWIDTH[1]() / 2));
        int1 = (((CC_GETHEIGHT() / 2) + CC_GETY()) - (CC_GETHEIGHT[1]() / 2));
        CC_SETPOSITION[1](int0, int1, 0, 0);
    };
    return;
}