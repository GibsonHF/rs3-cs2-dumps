//
function script14167(int0: int, int1: component, int2: component): void {
    if (((varclient_6403 == 2) && ((int0 == 3) || (int0 == 1)))) {
        script14172(comp(1477, 707), comp(1477, 722));
        return;
    };
    if ((IF_FIND(int1) == 1)) {
        if (((int0 == 1) && ((IF_HASSUB(struct_getparam(21300, 3505)) == 1) || (IF_HASSUB(comp(1477, 739)) == 1)))) {
            script4452(CC_GETX(), CC_GETY(), ((CC_GETWIDTH() + 210) + 10), CC_GETHEIGHT());
        } else {
            script4452(CC_GETX(), CC_GETY(), CC_GETWIDTH(), CC_GETHEIGHT());
        };
        script14171(int2);
        script4204(int0);
    };
    return;
}