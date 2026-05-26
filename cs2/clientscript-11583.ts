//
function script11583(): void {
    script11587(1);
    IF_SETTEXT("Challenge Gem - Skilling Competition", 107151380);
    IF_SETTEXT("Skill", 107151364);
    IF_SETTEXT("Skill level range", 107151397);
    IF_SETTEXT(inttostring(varbitplayer_28341, 10), 107151443);
    IF_SETTEXT(inttostring(varbitplayer_28342, 10), 107151449);
    IF_SETHIDE(0, 107151365);
    IF_SETHIDE(1, 107151366);
    IF_SETHIDE(1, 107151367);
    IF_SETHIDE(1, 107151409);
    IF_SETHIDE(1, 107151410);
    IF_SETHIDE(1, 107151411);
    IF_SETHIDE(1, 107151412);
    IF_SETHIDE(1, 107151362);
    var string0 = "The skill you need to gain XP in for this competition.";
    var string1 = "Enter the minimum player skill level that can enter this competition.";
    var string2 = "Enter the maximum player skill level that can enter this competition.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 107151364);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 107151443);
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 107151449);
    return;
}