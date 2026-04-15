//
function script19500(int0: component): void {
    if ((varplayer_11962 == 0)) {
        IF_SETTEXT("Loading...", comp(1313, 24));
        return;
    };
    var int1 = 0;
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(5945, (CLIENTCLOCK() + (varplayer_11962 * 30)));
        CC_SETONTIMER(callback(script19501, -2147483645));
    };
    return;
}