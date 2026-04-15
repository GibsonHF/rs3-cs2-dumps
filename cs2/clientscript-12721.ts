//
function script12721(int0: int): void {
    if ((cc_getparam(4158) > 0)) {
        cc_setparam(5351, MODULO((cc_getparam(5351) + 1), (cc_getparam(4158) + 1)));
        if ((cc_getparam(5351) == 0)) {
            script7005(int0);
        };
    } else {
        script7005(int0);
    };
    return;
}