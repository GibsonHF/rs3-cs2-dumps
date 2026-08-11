//
function script21097(): void {
    var int1 = dbrow_getfield(int0, 1343504, varbitplayer_58408);
    var int2 = 0;
    if ((int1 != -1)) {
        int2 = dbrow_getfield(int1, 1347616, 0);
    };
    IF_SETHIDE(false, comp(1443, 10));  // league_parent_relics:detailed
    script8421(94568497, 94568499, 94568498, 94568500, "Membership Required", 21217, 1007, 1, -1, -1);
    var string0 = "You must be a member to activate this relic.";
    if ((int2 == 1)) {
        string0 = "You must be a member to activate this blessing.";
    };
    IF_SETTEXT(`${string0}<br>To continue your Leagues journey, please subscribe to RuneScape.`, comp(1443, 53));
    if ((script6431() == 0)) {
        IF_SETTEXT("Subscribe", comp(1443, 54));
    } else {
        IF_SETTEXT("Close", comp(1443, 54));
    };
    return;
}