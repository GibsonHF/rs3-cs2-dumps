//
function script11583(): void {
    script11587(true);
    IF_SETTEXT("Challenge Gem - Skilling Competition", comp(1635, 20));
    IF_SETTEXT("Skill", comp(1635, 4));
    IF_SETTEXT("Skill level range", comp(1635, 37));
    IF_SETTEXT(inttostring(varbitplayer_28341, 10), comp(1635, 83));
    IF_SETTEXT(inttostring(varbitplayer_28342, 10), comp(1635, 89));
    IF_SETHIDE(false, comp(1635, 5));
    IF_SETHIDE(true, comp(1635, 6));
    IF_SETHIDE(true, comp(1635, 7));
    IF_SETHIDE(true, comp(1635, 49));
    IF_SETHIDE(true, comp(1635, 50));
    IF_SETHIDE(true, comp(1635, 51));
    IF_SETHIDE(true, comp(1635, 52));
    IF_SETHIDE(true, comp(1635, 2));
    var string0 = "The skill you need to gain XP in for this competition.";
    var string1 = "Enter the minimum player skill level that can enter this competition.";
    var string2 = "Enter the maximum player skill level that can enter this competition.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 107151364);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 107151443);
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 107151449);
    return;
}