//
function script21192(): void {
    if ((script8292(13, 1) == 0)) {
        return;
    };
    var int1 = 103940106;
    var int2 = (2500 * 10);
    var int3 = 0;
    while ((int3 < 50)) {
        if (((CC_FIND(int1, int3) == 1) && (cc_getparam(9501) == int0))) {
            stack(int1);
            stack((int2 + int3));
            script21130();
            if ((CC_FINDBYCATEGORY() == 1)) {
                CC_SETTEXT("Installed");
                script7872(0, 1, 0, 0);
                CC_SETONMOUSEREPEAT(callback());
                script8808();
                return;
            };
        };
        int3 = (int3 + 1);
    };
    return;
}