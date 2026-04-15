//
function script2632(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(1622 as cs2enum);
    var int2 = 0;
    var int3 = IF_GETWIDTH(comp(1156, 3));
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var string2 = "<str>";
    var string3 = "";
    CC_DELETEALL(comp(1156, 5));
    CC_DELETEALL(comp(1156, 6));
    while ((int0 < int1)) {
        int8 = enum_getvalue(0, 73, 1622 as cs2enum, int0);
        int7 = script2629(int8);
        string0 = struct_getparam(int8, 1333);
        string1 = struct_getparam(int8, 1334);
        if ((int7 == 0)) {
            switch (int8) {
                case 4154:
                case 4155:
                case 4156:
                case 4157: {
                    string0 = `${string0} (${inttostring(varbitplayer_3730, 10)})`;
                    break;
                }
                case 4159: {
                    string0 = `${string0} (${inttostring(varbitplayer_3784, 10)})`;
                    break;
                }
                case 4158: {
                    string1 = script2637(string1, varbitplayer_3730, 450, "Defeat 450 bosses");
                    string1 = script2636(string1, varbitplayer_3735, 0, "Spectate a match");
                    string1 = script2636(string1, varbitplayer_3790, 0, `${inttostring(varbitplayer_3733, 10)} / 25 Climber, Endurance or Special fights.`);
                    break;
                }
                case 4160: {
                    string1 = script2637(string1, varbitplayer_3730, 500, "Defeat 500 bosses");
                    string1 = script2636(string1, varbitplayer_3790, 0, `${inttostring(varbitplayer_3733, 10)} / 25 Climber, Endurance or Special fights.`);
                    string1 = script2636(string1, varbitplayer_3736, 0, "Defeat Nomad");
                    string1 = script2636(string1, varbitplayer_3739, 0, "Defeat Eruni, Leeuni and Ayuni");
                    string1 = script2636(string1, varbitplayer_3742, 0, "Defeat The Untouchable");
                    string1 = script2636(string1, varbitplayer_3745, 0, "Defeat Dagannoth Sentinels");
                    string1 = script2636(string1, varbitplayer_3748, 0, "Defeat Balance Elemental");
                    string1 = script2636(string1, varbitplayer_3751, 0, "Defeat Ice Demon");
                    break;
                }
                case 4161: {
                    string1 = script2637(string1, varbitplayer_3730, 500, "Defeat 500 bosses");
                    string1 = script2636(string1, varbitplayer_3790, 0, `${inttostring(varbitplayer_3733, 10)} / 25 Climber, Endurance or Special fights.`);
                    string1 = script2636(string1, varbitplayer_3738, 0, "Defeat Decaying Avatar");
                    string1 = script2636(string1, varbitplayer_3741, 0, "Defeat Second Dagannoth Mother");
                    string1 = script2636(string1, varbitplayer_3744, 0, "Defeat The Everlasting and Illusive");
                    string1 = script2636(string1, varbitplayer_3747, 0, "Defeat Nezikchened");
                    string1 = script2636(string1, varbitplayer_3750, 0, "Defeat Arrav");
                    string1 = script2636(string1, varbitplayer_3753, 0, "Defeat Giant Roc");
                    break;
                }
                case 4162: {
                    string1 = script2637(string1, varbitplayer_3730, 500, "Defeat 500 bosses");
                    string1 = script2636(string1, varbitplayer_3790, 0, `${inttostring(varbitplayer_3733, 10)} / 25 Climber, Endurance or Special fights.`);
                    string1 = script2636(string1, varbitplayer_3737, 0, "Defeat Pest Queen");
                    string1 = script2636(string1, varbitplayer_3740, 0, "Defeat Zenevivia");
                    string1 = script2636(string1, varbitplayer_3743, 0, "Defeat Damis, Fareed, Kamil and Dessous");
                    string1 = script2636(string1, varbitplayer_3746, 0, "Defeat Karamel and Gelatinnoth Mother");
                    string1 = script2636(string1, varbitplayer_3749, 0, "Defeat Jungle Demon");
                    string1 = script2636(string1, varbitplayer_3752, 0, "Defeat The Inadequacy");
                    break;
                }
            };
        } else if ((struct_getparam(int8, 1335) == true)) {
            switch (struct_getparam(int8, 1336)) {
                case 1: {
                    string1 = `${string1}<br>This will be applied automatically.`;
                    break;
                }
                case 2: {
                    string1 = `${string1}<br>This item can now appear in the reward chest.`;
                    break;
                }
            };
        };
        int4 = script7593(string0, (int3 - 130), 26 as fontmetrics, 0);
        int5 = script7593(string1, (int3 - 130), 26 as fontmetrics, 0);
        int6 = ((int4 + int5) + 8);
        if ((int7 == 0)) {
            script6204(comp(1156, 5), int3, int6, 0, int2, 1, 28683 as struct);
            script13980(comp(1156, 5), comp(1156, 6), 28553 as struct, (int3 - 125), ((int2 + (int6 / 2)) - 14), 120, int0, true, "Locked");
            script6203(comp(1156, 5), (int3 - 130), int4, 5, (int2 + 2), 26 as fontmetrics, string0, 5);
            script6203(comp(1156, 5), (int3 - 130), int5, 5, ((int2 + 4) + int4), 26 as fontmetrics, string1, 5);
        } else {
            script2682(comp(1156, 5), int3, int6, 0, int2, 1, int0);
            if ((struct_getparam(int8, 1335) == true)) {
                script13980(comp(1156, 5), comp(1156, 6), 28554 as struct, (int3 - 125), ((int2 + (int6 / 2)) - 14), 120, int0, false, "Unlocked");
            } else {
                script13980(comp(1156, 5), comp(1156, 6), 28553 as struct, (int3 - 125), ((int2 + (int6 / 2)) - 14), 120, int0, false, "Claim");
            };
            script6203(comp(1156, 5), (int3 - 130), int4, 5, (int2 + 2), 26 as fontmetrics, string0, 2);
            script6203(comp(1156, 5), (int3 - 130), int5, 5, ((int2 + 4) + int4), 26 as fontmetrics, string1, 3);
            if (((int8 == 4157 as struct) && (CC_FIND(comp(1156, 6), int0) == 1))) {
                CC_SETOP(1, "Buy 10");
                CC_SETOP(2, "Buy 50");
                CC_SETOP(3, "Buy 500");
                CC_SETOP(4, "Buy X");
            };
        };
        int2 = ((int2 + int6) + 6);
        int0 = (int0 + 1);
    };
    if ((int2 > IF_GETHEIGHT(comp(1156, 3)))) {
        IF_SETSCROLLPOS(0, MIN(varclient_6520, (int2 - IF_GETHEIGHT(comp(1156, 3)))), comp(1156, 3));
        IF_SETSCROLLSIZE(0, int2, comp(1156, 3));
    } else {
        IF_SETSCROLLPOS(0, 0, comp(1156, 3));
        IF_SETSCROLLSIZE(0, 0, comp(1156, 3));
    };
    script7791(comp(1156, 4), comp(1156, 3));
    return;
}