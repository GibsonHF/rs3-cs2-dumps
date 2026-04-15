//
function script11582(): void {
    script11587(true);
    IF_SETTEXT("Challenge Gem - Combat Competition", comp(1635, 20));
    IF_SETTEXT("Enemy combat level range", comp(1635, 4));
    IF_SETTEXT("Player combat level range", comp(1635, 37));
    IF_SETTEXT(inttostring(varbitplayer_28347, 10), comp(1635, 83));
    IF_SETTEXT(inttostring(varbitplayer_28348, 10), comp(1635, 89));
    IF_SETHIDE(true, comp(1635, 5));
    IF_SETHIDE(false, comp(1635, 6));
    IF_SETHIDE(false, comp(1635, 7));
    IF_SETHIDE(false, comp(1635, 49));
    IF_SETHIDE(false, comp(1635, 50));
    IF_SETHIDE(false, comp(1635, 51));
    IF_SETHIDE(false, comp(1635, 52));
    IF_SETHIDE(false, comp(1635, 2));
    var string0 = "The minimum and maximum combat level of the enemies you need to kill in this competition.";
    var string1 = "Enter the minimum player combat level that can enter this competition.";
    var string2 = "Enter the maximum player combat level that can enter this competition.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 107151364);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 107151443);
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 107151449);
    return;
}