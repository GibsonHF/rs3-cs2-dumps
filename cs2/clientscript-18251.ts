//
function script18251(int0: int, int1: struct, int2: int): void {
    var int3 = script6431();
    var int4 = struct_getparam(int1, 8682);
    IF_SETHIDE(false, comp(1343, 46));
    IF_SETHIDE(false, comp(1343, 47));
    IF_SETHIDE(false, comp(1343, 43));
    IF_SETHIDE(false, comp(1343, 56));
    IF_SETHIDE(false, comp(1343, 59));
    IF_SETHIDE(true, comp(1343, 79));
    IF_SETHIDE(true, comp(1343, 80));
    IF_SETHIDE(PLAYERMEMBER(), comp(1343, 170));
    IF_SETTEXT(script17039(int1), comp(1343, 45));
    IF_SETSIZE(35, 35, 0, 0, comp(1343, 52));
    stack(struct_getparam(int1, 1271));
    stack(88014900);
    IF_SETGRAPHIC();
    stack(int1);
    stack(1274);
    struct_getparam();
    var string0 = stack();
    if (((int3 == 1) && (STRING_LENGTH(struct_getparam(int1, 8082)) > 0))) {
        string0 = struct_getparam(int1, 8082);
    };
    script16248(string0, comp(1343, 54), -1);
    IF_SETHIDE(true, comp(1343, 30));
    script18255();
    IF_SETONVARTRANSMIT(callback(script18254, 10298, 3232, 3233, 4767, 4767, 4767, 4767, 4767, 4767, 4767, 4767, 4767, 4767, 3240, 3241, 3242, 3243, 3244, 18), comp(1343, 59));
    script18253(int1, int2);
    IF_SETONVARTRANSMIT(callback(script18252, int1, int2, 6901, 6902, 1269, 8738, 8739, 5), 88014917);
    var string1 = "";
    if ((((PLAYERMEMBER() == 1) && (script4148() == false)) && (script16840(script12477(), 5) == 0))) {
        if ((STRING_LENGTH(string1) > 0)) {
            string1 = strconcat(string1, ", ");
        };
        string1 = strconcat(string1, "1 Treasure Hunter key");
    };
    if ((int4 == 0)) {
        if ((int0 == 1)) {
            if ((STRING_LENGTH(string1) > 0)) {
                string1 = strconcat(string1, ", a Combat XP Lamp");
            } else {
                string1 = strconcat(string1, "A Combat XP Lamp");
            };
        } else {
            if ((STRING_LENGTH(string1) > 0)) {
                string1 = strconcat(string1, ", ");
            };
            string1 = strconcat(string1, `${enum_getvalue(0, 36, 108 as cs2enum, int0)} XP`);
        };
    };
    if ((struct_getparam(int1, 2705) != -1 as struct)) {
        string1 = strconcat(string1, ", a Challenge Mystery Bag");
    };
    var int5 = script16500(int2);
    var int6 = script16501(int2);
    var int7 = struct_getparam(int1, 2235);
    var string2 = script17230(int1, int5);
    var int8 = 0;
    switch (int2) {
        case 1: {
            int8 = varbitplayer_16576;
            break;
        }
        case 2: {
            int8 = varbitplayer_16580;
            break;
        }
        case 3: {
            int8 = varbitplayer_16584;
            break;
        }
        case 4: {
            int8 = varbitplayer_16588;
            break;
        }
        case 5: {
            int8 = varbitplayer_16592;
            break;
        }
    };
    if ((int6 == 1)) {
        int8 = MIN((int7 + int8), (int7 * 2));
    };
    if ((int5 == 1)) {
        int7 = (int7 * 2);
    };
    var int9 = -1 as graphic;
    var string3 = "";
    var string4 = "You can get up to 100 vis wax per day from Wizard Goldberg in the Runecrafting Guild.";
    switch (int2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: {
            if (((int8 >= int7) && (script18262(int2) == 1))) {
                int9 = script3561(-2);
            };
            IF_SETOBJECT_NONUM(32092 as obj, 0, comp(1343, 76));
            script16248(string4, comp(1343, 76), -1);
            IF_SETOBJECT_NONUM(32092 as obj, 0, comp(1343, 65));
            script16248(string4, comp(1343, 65), -1);
            string3 = "The number of daily challenge tokens in your currency pouch.";
            string3 = strconcat(string3, "<br>");
            script16248(string3, comp(1343, 179), -1);
            break;
        }
        default: {
            if ((script16319(6) == int1)) {
                int8 = varbitplayer_16596;
            };
            int9 = -1 as graphic;
            string1 = "You will earn XP as you complete the Challenge, but only Daily Challenges give additional rewards.";
            break;
        }
    };
    if ((STRING_LENGTH(string1) == 0)) {
        string1 = "None";
    };
    IF_SETTEXT(string1, comp(1343, 68));
    string3 = "When you've completed a challenge, press the Claim Rewards button or hand in your challenge to a Challenge Mistress for your reward.";
    if ((int9 != -1 as graphic)) {
        IF_SETHIDE(false, comp(1343, 53));
        stack(int9);
        stack(88014901);
        IF_SETGRAPHIC();
        if ((int9 == script3561(-2))) {
            string3 = "You've completed this challenge!<br>Press the Claim Rewards button or hand in your challenge to a Challenge Mistress for your reward.";
        };
        script16248(string3, comp(1343, 53), -1);
    } else {
        IF_SETHIDE(true, comp(1343, 53));
    };
    IF_SETTEXT(string2, comp(1343, 54));
    IF_SETHIDE(false, comp(1343, 50));
    IF_SETTEXT(`${inttostring(int8, 10)} / ${inttostring(int7, 10)}`, comp(1343, 55));
    if ((int7 != 0)) {
        IF_SETSIZE(SCALE(int8, int7, 16384), 16384, 2, 2, comp(1343, 111));
    } else {
        IF_SETSIZE(16384, 16384, 2, 2, comp(1343, 111));
    };
    script16248("Shows your progress in your current challenge.", comp(1343, 108), -1);
    return;
}