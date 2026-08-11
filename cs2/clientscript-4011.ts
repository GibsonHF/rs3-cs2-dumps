//
function script4011(): void {
    if ((varclient_699 == -1 as quest)) {
        return;
    };
    var int0 = varclient_699;
    var int1 = script2193(int0);
    if ((int1 == 2)) {
        IF_SETTEXT("Quest complete!", comp(1500, 425));  // quest_journal:prog_text
    } else if ((int1 == 1)) {
        IF_SETTEXT("Started", comp(1500, 425));  // quest_journal:prog_text
    } else {
        IF_SETTEXT("Not started", comp(1500, 425));  // quest_journal:prog_text
    };
    if ((IF_GETHIDE(comp(1500, 419)) == true)) {  // quest_journal:accept_job_2
        IF_SETSIZE(260, 0, 1, 1, comp(1500, 425));  // quest_journal:prog_text
    } else {
        IF_SETSIZE(424, 0, 1, 1, comp(1500, 425));  // quest_journal:prog_text
    };
    var string0 = script2103(int0);
    IF_SETSIZE((STRINGWIDTH(string0, IF_GETFONTMETRICS(comp(1500, 331) /*quest_journal:title_1*/)) + 30), IF_GETHEIGHT(comp(1500, 330) /*quest_journal:titlebox_1*/), 0, 0, comp(1500, 330) /*quest_journal:titlebox_1*/);
    script18490(string0, 98304331, 98304333);
    if ((QUEST_GETMEMBERS(int0) == true)) {
        IF_SETHIDE(false, comp(1500, 335));  // quest_journal:members_icon
        IF_SETHIDE(true, comp(1500, 336));  // quest_journal:f2p_icon
    } else {
        IF_SETHIDE(true, comp(1500, 335));  // quest_journal:members_icon
        IF_SETHIDE(false, comp(1500, 336));  // quest_journal:f2p_icon
    };
    var string1 = `${QUEST_GETNAME(int0)}/Quick guide`;
    IF_SETONBUTTONCLICK(callback(script7808, string1), 98304333);
    IF_SETGRAPHIC(quest_getparam(int0, 7829), comp(1500, 391));  // quest_journal:quest_icon
    IF_SETTEXT(inttostring(quest_getparam(int0, 7834), 10), comp(1500, 390));  // quest_journal:quest_icon_footer
    var int2 = script10495(0);
    var int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Start Point:</col>`, quest_getparam(int0, 7814), 98304343, 98304344, 98304345, -1, -1, int1, 0);
    string0 = "";
    if ((quest_getparam(int0, 7836) != 42)) {
        string0 = enum_getvalue(0, 36, 3618 as cs2enum, quest_getparam(int0, 7836));
        if ((quest_getparam(int0, 7837) > 0)) {
            switch (MAP_LANG()) {
                case 0: {
                    string0 = `${string0} #${inttostring(quest_getparam(int0, 7837), 10)}.`;
                    break;
                }
                case 2: {
                    string0 = `${string0} n°${inttostring(quest_getparam(int0, 7837), 10)}.`;
                    break;
                }
                default: {
                    string0 = `${string0} ${inttostring(quest_getparam(int0, 7837), 10)}.`;
                    break;
                }
            };
        };
        string0 = `${string0} (${enum_getvalue(0, 36, 13275, quest_getparam(int0, 7831))}.)`;
        if ((STRING_LENGTH(quest_getparam(int0, 7888)) > 0)) {
            string0 = `${string0}<br>${quest_getparam(int0, 7888)}`;
        };
        int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Quest Series & Age:</col>`, string0, 98304340, 98304341, 98304342, -1, -1, int1, int3);
    } else {
        string0 = `${enum_getvalue(0, 36, 13275, quest_getparam(int0, 7831))}.`;
        if ((STRING_LENGTH(quest_getparam(int0, 7888)) > 0)) {
            string0 = `${string0} (${quest_getparam(int0, 7888)})`;
        };
        int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Age:</col>`, string0, 98304340, 98304341, 98304342, -1, -1, int1, int3);
    };
    if ((quest_getparam(int0, 7833) == 2)) {
        int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Voice-Acted:</col>`, "This quest is fully voice-acted and features atmospheric music and effects. We suggest you keep your sound on to get the most out of it.", 98304346, 98304347, 98304348, -1, -1, int1, int3);
        IF_SETHIDE(false, comp(1500, 346));  // quest_journal:voice_acted_layer
    } else if ((quest_getparam(int0, 7833) == 1)) {
        int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Voice-Acted:</col>`, "This quest is partially voice-acted. We suggest you keep your sound on to get the most out of it.", 98304346, 98304347, 98304348, -1, -1, int1, int3);
        IF_SETHIDE(false, comp(1500, 346));  // quest_journal:voice_acted_layer
    } else if ((quest_getparam(int0, 7833) == 3)) {
        int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Music:</col>`, "This quest focuses on music. We suggest you keep your sound effects and music on to get the most out of it.", 98304346, 98304347, 98304348, -1, -1, int1, int3);
        IF_SETHIDE(false, comp(1500, 346));  // quest_journal:voice_acted_layer
    } else {
        IF_SETHIDE(true, comp(1500, 346));  // quest_journal:voice_acted_layer
    };
    int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Requirements:</col>`, varclient_2554, 98304349, 98304350, 98304351, -1, -1, int1, int3);
    if ((MAP_LANG() != 0)) {
        if ((HAS_NXT() == 1)) {
            CC_DELETEALL(comp(1500, 352));  // quest_journal:requirements_dynamic
        } else {
            script13742(varclient_2554, 98304352, 98304351, script2111(int0, 1), script2111(int0, 2), script2111(int0, 3), script2111(int0, 4), script2111(int0, 5), script2111(int0, 6), script2111(int0, 7), script2111(int0, 8), script2111(int0, 9), script2111(int0, 10), script2111(int0, 11), script2111(int0, 12));
        };
    } else {
        script13742(varclient_2554, 98304352, 98304351, script2111(int0, 1), script2111(int0, 2), script2111(int0, 3), script2111(int0, 4), script2111(int0, 5), script2111(int0, 6), script2111(int0, 7), script2111(int0, 8), script2111(int0, 9), script2111(int0, 10), script2111(int0, 11), script2111(int0, 12));
    };
    var string2 = script1162(int0);
    if ((STRING_LENGTH(string2) > 0)) {
        int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Follows events of:</col>`, string2, 98304353, 98304354, 98304355, -1, -1, int1, int3);
        script13742(string2, 98304356, 98304355, quest_getparam(int0, 7840), quest_getparam(int0, 7841), quest_getparam(int0, 7842), quest_getparam(int0, 7843), quest_getparam(int0, 7844), quest_getparam(int0, 7845), quest_getparam(int0, 7846), quest_getparam(int0, 7847), quest_getparam(int0, 7848), quest_getparam(int0, 7849), quest_getparam(int0, 7850), quest_getparam(int0, 7851));
        IF_SETHIDE(false, comp(1500, 353));  // quest_journal:suggestions_layer
        if ((script6431() == 1)) {
            int3 = (int3 - 25);
        } else {
            int3 = (int3 - 20);
        };
        IF_SETHIDE(false, comp(1500, 357));  // quest_journal:suggestions_footer_layer
        switch (quest_getparam(int0, 7853)) {
            case 1: {
                int3 = script4249("", "To fully appreciate the backstory and events of this quest, and unlock the full rewards, we strongly recommend you first complete the above suggested quests. You may complete the quest without these prerequisites, and claim the rewards at a later date.", 98304357, 98304358, 98304359, -1, -1, int1, int3);
                break;
            }
            case 0: {
                int3 = script4249("", "", 98304357, 98304358, 98304359, -1, -1, int1, int3);
                IF_SETHIDE(true, comp(1500, 357));  // quest_journal:suggestions_footer_layer
                break;
            }
        };
    } else {
        IF_SETHIDE(true, comp(1500, 353));  // quest_journal:suggestions_layer
        IF_SETHIDE(true, comp(1500, 357));  // quest_journal:suggestions_footer_layer
    };
    var string3 = "";
    var string4 = "";
    if ((quest_getparam(int0, 7852) == 1)) {
        [string3, string4] = script18529(int0);
    };
    if ((STRING_LENGTH(string4) > 0)) {
        int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>${string3}</col>`, string4, 98304360, 98304361, 98304362, -1, -1, int1, int3);
        IF_SETHIDE(false, comp(1500, 360));  // quest_journal:suggested_special_layer
    } else {
        IF_SETHIDE(true, comp(1500, 360));  // quest_journal:suggested_special_layer
    };
    var string5 = script6392(quest_getparam(int0, 949), quest_getparam(int0, 887), quest_getparam(int0, 3822), quest_getparam(int0, 950), quest_getparam(int0, 888), quest_getparam(int0, 4061), quest_getparam(int0, 951), quest_getparam(int0, 889), quest_getparam(int0, 4472), quest_getparam(int0, 952), quest_getparam(int0, 890), quest_getparam(int0, 4812), quest_getparam(int0, 1212), quest_getparam(int0, 891), quest_getparam(int0, 4867), quest_getparam(int0, 1270), quest_getparam(int0, 892), quest_getparam(int0, 5481), quest_getparam(int0, 1330), quest_getparam(int0, 893), quest_getparam(int0, 6529), quest_getparam(int0, 1360), quest_getparam(int0, 894), quest_getparam(int0, 6532), quest_getparam(int0, 1361), quest_getparam(int0, 895), quest_getparam(int0, 6830), quest_getparam(int0, 1362), quest_getparam(int0, 896), quest_getparam(int0, 6831), quest_getparam(int0, 1363), quest_getparam(int0, 898), quest_getparam(int0, 6850), quest_getparam(int0, 3291), quest_getparam(int0, 948), quest_getparam(int0, 6851), quest_getparam(int0, 7815), "None.", ", ");
    int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Required Items:</col>`, string5, 98304366, 98304367, 98304368, 98304369, 98304374, int1, int3);
    var string6 = quest_getparam(int0, 7816);
    var int4 = quest_getparam(int0, 857);
    if (((STRING_LENGTH(string6) == STRING_LENGTH("None.")) && (int4 > 1))) {
        if ((int4 == 6)) {
            string6 = `${string6} Combat is scaled and you should bring appropriate equipment and food for your level.`;
        } else {
            string6 = `You must defeat an enemy of at least: ${enum_getvalue(0, 36, 3613, int4)}.`;
        };
    };
    int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Combat:</col>`, string6, 98304375, 98304376, 98304377, -1, -1, int1, int3);
    string0 = `${enum_getvalue(0, 36, 13354, quest_getparam(int0, 7855))}.`;
    int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Length:</col>`, string0, 98304363, 98304364, 98304365, -1, -1, int1, int3);
    switch (int0) {
        case 354: {
            IF_CLEAROPS(comp(1500, 409));  // quest_journal:accept_click
            script13977(98304408, 98304409, 28553, "Offer");
            IF_SETPOSITION(0, IF_GETY(comp(1500, 407)), 1, 0, comp(1500, 407));  // quest_journal:accept_quest
            IF_SETHIDE(true, comp(1500, 404));  // quest_journal:decline_quest
            IF_SETHIDE(true, comp(1500, 401));  // quest_journal:checkbox_withlabel
            string0 = varclient_2544;
            break;
        }
        default: {
            string0 = script2134(int0, "", "");
            break;
        }
    };
    int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Rewards:</col>`, string0, 98304378, 98304379, 98304380, 98304381, 98304386, int1, int3);
    var string7 = "";
    switch (quest_getparam(int0, 7831)) {
        case 1: {
            string7 = "This is a Fifth Age quest, and takes place in the past, before the gods returned to Gielinor.";
            break;
        }
        case 3: {
            if ((int0 == 361)) {
                string7 = "The events of this quest trigger the end of the Fifth Age and begins the Sixth Age.<br>It is recommended, but not necessary, to complete Fifth Age quests before Sixth Age quests to fully understand the story of the Sixth Age.";
            } else if ((quest_getparam(int0, 1345) <= 321)) {
                string7 = "This is a Sixth Age quest, and takes place after the events of The World Wakes.<br>The gods are free to return to Gielinor. You are the World Guardian.";
            };
            break;
        }
    };
    if (((STRING_LENGTH(string7) > 0) || (STRING_LENGTH(quest_getparam(int0, 7839)) > 0))) {
        if ((STRING_LENGTH(quest_getparam(int0, 7839)) > 0)) {
            int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Note:</col>`, quest_getparam(int0, 7839), 98304387, 98304388, 98304389, -1, -1, int1, int3);
        } else {
            int3 = script4249(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int2))}>Note:</col>`, string7, 98304387, 98304388, 98304389, -1, -1, int1, int3);
        };
        IF_SETHIDE(false, comp(1500, 387));  // quest_journal:age_layer
    } else {
        IF_SETHIDE(true, comp(1500, 387));  // quest_journal:age_layer
    };
    switch (quest_getparam(int0, 7831)) {
        case 1: {
            IF_SETHIDE(false, comp(1500, 392));  // quest_journal:5th_age_icon
            IF_SETHIDE(true, comp(1500, 395));  // quest_journal:6th_age_icon
            break;
        }
        case 3:
        case 4: {
            IF_SETHIDE(true, comp(1500, 392));  // quest_journal:5th_age_icon
            IF_SETHIDE(false, comp(1500, 395));  // quest_journal:6th_age_icon
            break;
        }
        default: {
            IF_SETHIDE(true, comp(1500, 392));  // quest_journal:5th_age_icon
            IF_SETHIDE(true, comp(1500, 395));  // quest_journal:6th_age_icon
            break;
        }
    };
    IF_SETSCROLLPOS(0, 0, comp(1500, 339));  // quest_journal:text_scrolling_layer_1
    if ((int3 > IF_GETHEIGHT(comp(1500, 339)))) {  // quest_journal:text_scrolling_layer_1
        IF_SETSCROLLSIZE(0, int3, comp(1500, 339));  // quest_journal:text_scrolling_layer_1
        script7791(98304398, 98304339);
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1500, 339));  // quest_journal:text_scrolling_layer_1
        CC_DELETEALL(comp(1500, 398));  // quest_journal:scrollbar_layer_1
    };
    return;
}