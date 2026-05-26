//
function script11582(): void {
    script11587(1);
    IF_SETTEXT("Challenge Gem - Combat Competition", 107151380);
    IF_SETTEXT("Enemy combat level range", 107151364);
    IF_SETTEXT("Player combat level range", 107151397);
    IF_SETTEXT(inttostring(varbitplayer_28347, 10), 107151443);
    IF_SETTEXT(inttostring(varbitplayer_28348, 10), 107151449);
    IF_SETHIDE(1, 107151365);
    IF_SETHIDE(0, 107151366);
    IF_SETHIDE(0, 107151367);
    IF_SETHIDE(0, 107151409);
    IF_SETHIDE(0, 107151410);
    IF_SETHIDE(0, 107151411);
    IF_SETHIDE(0, 107151412);
    IF_SETHIDE(0, 107151362);
    var string0 = "The minimum and maximum combat level of the enemies you need to kill in this competition.";
    var string1 = "Enter the minimum player combat level that can enter this competition.";
    var string2 = "Enter the maximum player combat level that can enter this competition.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 107151364);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 107151443);
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 107151449);
    return;
}