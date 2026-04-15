//
function script2006(): void {
    var int0 = IF_GETX(comp(906, 154));
    var int1 = 0;
    if ((IF_FIND(comp(906, 154)) == 1)) {
        int1 = cc_getparam(4520);
    };
    if (((int0 <= (0 - IF_GETWIDTH(comp(815, 0)))) || ((int0 < 0) && (int1 == 1)))) {
        IF_SETPARAM_INT(4520, 0, comp(906, 154));
        IF_SETONTIMER(callback(script15621), comp(906, 5));
        IF_SETHIDE(0, 59375768);
    } else {
        IF_SETPARAM_INT(4520, 1, comp(906, 154));
        IF_SETONTIMER(callback(script15623), comp(906, 5));
    };
    return;
}