//
function script13919(): void {
    varclient_5109 = 1;
    varclient_6369 = CLIENTCLOCK();
    script8841(65, 1);
    script13924();
    script13925();
    script13927(0);
    if ((script6431() == true)) {
        IF_SETPARAM_INT(1343, 0, comp(1931, 5));
        IF_SETONCLICK(callback(script116, -2147483645), comp(1931, 5));
        return;
    };
    IF_SETONMOUSEOVER(callback(script13929, 1), comp(1931, 5));
    IF_SETONMOUSELEAVE(callback(script13929, 0), 126550021);
    IF_SETNOCLICKTHROUGH(1, struct_getparam(21304, 3505));
    script10416(126550041, 126550042, "Invert keyboard controls", "Swaps up/down and left/right controls.", "Swaps up/down and left/right controls.", varbitplayer_39326);
    return;
}