//
function script16(): void {
    if ((script6431() == false)) {
        IF_SETHIDE(true, comp(1270, 14));
        IF_SETONMOUSEREPEAT(callback(script6131, -2147483647, -2147483646), comp(1270, 17));
    } else {
        IF_SETOP(1, "", comp(1270, 16));
        IF_SETONCLICK(callback(script6131, -2147483647, -2147483646), comp(1270, 17));
        IF_SETHIDE(0, 83230734);
        varclient_1889 = (IF_GETWIDTH(83230722) / 2);
        varclient_1890 = (IF_GETHEIGHT(83230722) / 2);
        IF_SETPOSITION((varclient_1889 - (IF_GETWIDTH(83230734) / 2)), (varclient_1890 - (IF_GETHEIGHT(83230734) / 2)), 0, 0, 83230734);
        CC_CREATE(83230734, 3, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETONOP(callback(script119));
        CC_SETOP(6, "Place beacon");
        CC_SETFILL(1);
        CC_SETTRANS(255);
        CC_SETNOCLICKTHROUGH(1);
    };
    return;
}