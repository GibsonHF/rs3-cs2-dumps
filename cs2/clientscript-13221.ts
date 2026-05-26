//
function script13221(): void {
    IF_SETONTIMER(callback(), 120783086);
    if ((IF_FIND(120783031) == 1)) {
        if ((strcmp(varclient_2250, "") == 0)) {
            IF_SETTEXT("Search...", 120783092);
            IF_SETCOLOUR(script10495(3), 120783092);
            IF_SETHIDE(1, 120783094);
        } else {
            IF_SETTEXT(ESCAPE(varclient_2250), 120783092);
            IF_SETHIDE(0, 120783095);
            IF_SETHIDE(0, 120783094);
            IF_SETONCLICK(callback(script13218), 120783095);
        };
        script13170(varclient_2250, cc_getparam(6362), cc_getparam(6364), cc_getparam(6365), cc_getparam(6366), cc_getparam(6367), cc_getparam(6368), cc_getparam(6369), cc_getparam(6370), cc_getparam(6371), cc_getparam(6372));
        script7796(120783088, script9984(28549, 1));
    };
    return;
}