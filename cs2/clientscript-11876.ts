//
function script11876(): void {
    if ((varbitplayer_29675 == 1)) {
        script9754(110428167, 110428169, -1, -1, -1);
    };
    if ((varbitplayer_29676 == 1)) {
        script9754(110428188, 110428184, -1, -1, -1);
    };
    script11878(110428192, 110428193);
    var string0 = "Sabotage catapults to earn Construction XP.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1685, 4));
    string0 = "Sabotage catapults to earn Woodcutting XP.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1685, 6));
    string0 = "Heal injured soldiers to earn Herblore XP.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1685, 23));
    string0 = "Heal injured soldiers to earn Constitution XP.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1685, 27));
    return;
}