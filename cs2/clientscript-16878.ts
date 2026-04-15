//
function script16878(): void {
    IF_SETONVARTRANSMIT(callback(script16878, 6601, 10647, 9008, 10637, 10630, 10630, 6), comp(906, 13));
    if ((script3112() == 0)) {
        return;
    };
    var int0 = script16828(varplayer_6601);
    var int1 = script16829(varplayer_6601);
    var int2 = ((DATE_MINUTES_FROMRUNEDAY(int1) + 720) - 1);
    IF_SETTEXT(`Fresh Start Worlds: Week ${inttostring(int0, 10)} Boosts (ACTIVE)`, comp(907, 12));
    IF_SETTEXT("Fresh Start Worlds: Next Week's Boosts", comp(907, 6));
    IF_SETONTIMER(callback(script12275, 59441161, 59375629, int2, varplayer_10647, -1, 1, 1, 1), 59375629);
    IF_SETONTIMER(callback(script12275, 59441167, 59375628, int2, varplayer_10647, -1, 1, 1, 1), 59375628);
    var int3 = struct_getparam(11795, 6381);
    var int4 = struct_getparam(25706, 6381);
    switch (MAP_LANG()) {
        case 1: {
            int3 = struct_getparam(11795, 6385);
            int4 = struct_getparam(25706, 6385);
            break;
        }
        case 2: {
            int3 = struct_getparam(11795, 6386);
            int4 = struct_getparam(25706, 6386);
            break;
        }
        case 3: {
            int3 = struct_getparam(11795, 6387);
            int4 = struct_getparam(25706, 6387);
            break;
        }
    };
    stack(int3);
    stack(59441166);
    IF_SETGRAPHIC();
    stack(int4);
    stack(59441160);
    IF_SETGRAPHIC();
    script16904();
    script16880(59441168, int0, 1);
    script16880(59441162, (int0 + 1), 0);
    IF_SETONTIMER(callback(script16879, -2147483645, int0, 1, 0), 59441168);
    IF_SETONTIMER(callback(script16879, -2147483645, (int0 + 1), 0, 0), 59441162);
    return;
}