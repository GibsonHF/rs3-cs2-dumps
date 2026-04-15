//
function script5753(int0: component): void {
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(5837, 3);
        cc_setparam(5838, 8);
        cc_setparam(5941, 0);
        CC_SETTRANS(255);
        CC_SETHIDE(true);
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    };
    return;
}