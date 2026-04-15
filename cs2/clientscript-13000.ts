//
function script13000(): void {
    if ((CC_FIND(comp(1430, 55), 3) == 1)) {
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5837, 1);
        cc_setparam(5938, 0);
        cc_setparam(5939, 127);
        cc_setparam(5940, (1000 * 4));
    };
    if ((IF_FIND(comp(1616, 0)) == 1)) {
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5837, 1);
        cc_setparam(5938, 0);
        cc_setparam(5939, 127);
        cc_setparam(5940, (1000 * 4));
    };
    return;
}