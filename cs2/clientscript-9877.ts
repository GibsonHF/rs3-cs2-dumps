//
function script9877(): void {
    var string0 = "Auto-retaliate disabled";
    var string1 = "Auto-retaliate<br>(off)";
    var int0 = 655 as graphic;
    var int1 = 9193;
    if ((varplayer_462 != 1)) {
        string0 = "Auto-retaliate enabled";
        string1 = "Auto-retaliate<br>(on)";
        int0 = 656 as graphic;
        int1 = 9194;
    };
    IF_SETTEXT(string1, comp(1503, 52));  // combatv2_legacy_side:auto_text
    IF_SETGRAPHIC(int0, comp(1503, 51));  // combatv2_legacy_side:optnodef
    IF_SETONMOUSEOVER(callback(script44, -2147483645, int1), comp(1503, 51));  // combatv2_legacy_side:optnodef
    IF_SETONMOUSELEAVE(callback(script44, -2147483645, int0), comp(1503, 51));  // combatv2_legacy_side:optnodef
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1503, 50));  // combatv2_legacy_side:auto_retaliate
    script8808();
    return;
}