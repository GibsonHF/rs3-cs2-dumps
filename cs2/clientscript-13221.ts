//
function script13221(): void {
    IF_SETONTIMER(callback(), comp(1843, 238));
    if ((IF_FIND(120783031) == 1)) {
        if ((strcmp(varclient_2250, "") == 0)) {
            IF_SETTEXT("Search...", comp(1843, 244));
            IF_SETCOLOUR(script10495(3), comp(1843, 244));
            IF_SETHIDE(true, comp(1843, 246));
        } else {
            IF_SETTEXT(ESCAPE(varclient_2250), comp(1843, 244));
            IF_SETHIDE(false, comp(1843, 247));
            IF_SETHIDE(false, comp(1843, 246));
            IF_SETONCLICK(callback(script13218), comp(1843, 247));
        };
        script13170(varclient_2250, cc_getparam(6362), cc_getparam(6364), cc_getparam(6365), cc_getparam(6366), cc_getparam(6367), cc_getparam(6368), cc_getparam(6369), cc_getparam(6370), cc_getparam(6371), cc_getparam(6372));
        script7796(comp(1843, 240), script9984(28549 as struct, 1));
    };
    return;
}