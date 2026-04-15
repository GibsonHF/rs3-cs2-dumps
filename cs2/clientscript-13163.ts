//
function script13163(): void {
    if ((varbitclient_35134 == 1)) {
        IF_SETHIDE(false, comp(1843, 182));
        IF_SETHIDE(true, comp(1843, 251));
        IF_SETHIDE(true, comp(1843, 260));
        if ((IF_FIND(comp(1843, 264)) == 1)) {
            CC_SETPOSITION(0, 0, 2, 2);
            CC_SETSIZE(220, 0, 1, 1);
        };
        IF_SETHIDE(true, comp(1843, 289));
        IF_SETHIDE(true, comp(1843, 294));
        IF_SETHIDE(false, struct_getparam(enum_getvalue(0, 73, 12222 as cs2enum, 5), 4040));
        IF_SETHIDE(true, struct_getparam(enum_getvalue(0, 73, 12222 as cs2enum, 6), 4040));
        if ((IF_FIND(comp(1843, 313)) == 1)) {
            CC_SETSIZE(220, 0, 0, 1);
        };
    } else {
        IF_SETHIDE(true, comp(1843, 182));
        IF_SETHIDE(false, comp(1843, 251));
        IF_SETHIDE(false, comp(1843, 260));
        if ((IF_FIND(comp(1843, 264)) == 1)) {
            CC_SETPOSITION(2, (((IF_GETHEIGHT(CC_GETLAYER()) - IF_GETY(comp(1843, 296))) + 4) + 2), 2, 2);
            CC_SETSIZE((220 - (2 * 2)), (IF_GETHEIGHT(comp(1843, 263)) - (2 * 2)), 0, 0);
        };
        IF_SETHIDE(true, comp(1843, 289));
        IF_SETHIDE(true, comp(1843, 294));
        IF_SETHIDE(true, struct_getparam(enum_getvalue(0, 73, 12222 as cs2enum, 5), 4040));
        IF_SETHIDE(false, struct_getparam(enum_getvalue(0, 73, 12222 as cs2enum, 6), 4040));
        if ((IF_FIND(comp(1843, 313)) == 1)) {
            CC_SETSIZE(220, 0, 1, 1);
        };
    };
    IF_SETSIZE(8, 0, 0, 0, comp(1843, 261));
    if ((IF_FIND(comp(1843, 262)) == 1)) {
        cc_setparam(6312, 8);
        cc_setparam(6313, 10);
        cc_setparam(6315, 8);
        cc_setparam(6316, 1);
        cc_setparam(6317, 8);
    };
    if ((IF_FIND(comp(1843, 186)) == 1)) {
        cc_setparam(6315, (3 * (20 + 4)));
    };
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        cc_setparam(6359, -1);
    };
    script13145(comp(1840, 2), comp(1840, 3));
    script8471(comp(1841, 2), 818 as inv);
    return;
}