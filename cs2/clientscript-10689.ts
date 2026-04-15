//
function script10689(): void {
    var int0 = STAT_BASE(25 as stat);
    var int1 = 0;
    if ((varbitplayer_25548 == 200)) {
        int1 = 0;
    } else if (((200 - varbitplayer_25548) > varbitplayer_25543)) {
        int1 = varbitplayer_25543;
    } else {
        int1 = (200 - varbitplayer_25548);
    };
    var int2 = (int1 * enum_getvalue(0, 0, 9394 as cs2enum, int0));
    var int3 = (varbitplayer_25543 / 5);
    var string0 = `<br>Daily Total: You have earned ${inttostring(varbitplayer_25548, 10)}/${inttostring(200, 10)}.`;
    if ((varbitplayer_25543 == 0)) {
        script8800(`You don't have any points yet, so you won't get any Divination XP! Get going!${string0}`, comp(1545, 10), -1);
    } else if ((int1 == 0)) {
        if ((varbitplayer_25543 < 5)) {
            script8800(`You have already gained the maximum amount of XP from this activity today, so you will not receive any additional XP. However, if you gain 5 points or more, you will still receive Divination-related boosts.${string0}`, comp(1545, 10), -1);
        } else if ((varbitplayer_25543 < 10)) {
            script8800(`You have already gained the maximum amount of XP from this activity today, so you will not receive any additional XP. However, your Divination-related boosts will last for 1 minute.${string0}`, comp(1545, 10), -1);
        } else {
            script8800(`You have already gained the maximum amount of XP from this activity today, so you will not receive any additional XP. However, your Divination-related boosts will last for ${inttostring(int3, 10)} minutes.${string0}`, comp(1545, 10), -1);
        };
    } else if ((varbitplayer_25543 < 5)) {
        if ((varbitplayer_25543 == 1)) {
            script8800(`For 1 point, you will be rewarded with ${inttostring(int2, 10)} Divination XP. If you gain 5 points or more, you will also receive Divination-related boosts.${string0}`, comp(1545, 10), -1);
        } else {
            script8800(`For ${inttostring(varbitplayer_25543, 10)} points, you will be rewarded with ${inttostring(int2, 10)} Divination XP. If you gain 5 points or more, you will also receive Divination-related boosts.${string0}`, comp(1545, 10), -1);
        };
    } else if ((varbitplayer_25543 < 10)) {
        script8800(`For ${inttostring(varbitplayer_25543, 10)} points, you will be rewarded with ${inttostring(int2, 10)} Divination XP and your Divination-related boosts will last for 1 minute.${string0}`, comp(1545, 10), -1);
    } else {
        script8800(`For ${inttostring(varbitplayer_25543, 10)} points, you will be rewarded with ${inttostring(int2, 10)} Divination XP, and your Divination-related boosts will last for ${inttostring(int3, 10)} minutes.${string0}`, comp(1545, 10), -1);
    };
    return;
}