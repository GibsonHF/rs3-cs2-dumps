//
function script4011(): void {
    if ((varclient_699 == -1 as quest)) {
        return;
    };
    var int0 = varclient_699;
    var int1 = script2193(int0);
    if ((int1 == 2)) {
        IF_SETTEXT("Quest complete!", comp(1500, 425));
    } else if ((int1 == 1)) {
        IF_SETTEXT("Started", comp(1500, 425));
    } else {
        IF_SETTEXT("Not started", comp(1500, 425));
    };
    if ((IF_GETHIDE(comp(1500, 419)) == true)) {
        IF_SETSIZE(260, 0, 1, 1, comp(1500, 425));
    } else {
        IF_SETSIZE(424, 0, 1, 1, comp(1500, 425));
    };
    var string0 = script2103(int0);
    IF_SETSIZE((STRINGWIDTH(string0, IF_GETFONTMETRICS(comp(1500, 331))) + 30), IF_GETHEIGHT(comp(1500, 330)), 0, 0, comp(1500, 330));
    script18490(string0, 98304331, 98304333);
    if ((QUEST_GETMEMBERS(int0) == true)) {
        IF_SETHIDE(false, comp(1500, 335));
        IF_SETHIDE(true, comp(1500, 336));
    } else {
        IF_SETHIDE(true, comp(1500, 335));
        IF_SETHIDE(false, comp(1500, 336));
    };
    var string1 = `${QUEST_GETNAME(int0)}/Quick guide`;
    IF_SETONBUTTONCLICK(callback(script7808, string1), 98304333);
    stack(int0);
    stack(7829);
    quest_getparam();
    IF_SETGRAPHIC(stack(), 98304391);
    stack(int0);
    stack(7834);
    quest_getparam();
    IF_SETTEXT(inttostring(stack(), 10), 98304390);
    var int2 = script10495(0);
    stack(PUSH_CONSTANT_INT[16]("<col=", int2));
    stack(`${stack()}${inttostring()}>Start Point:</col>`);
    stack(int0);
    stack(7814);
    quest_getparam();
    var int3 = script4249(stack(), 98304343, 98304344, 98304345, -1, -1, int1, 0);
    string0 = "";
    stack(int0);
    stack(7836);
    quest_getparam();
    if ((stack() != 42)) {
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
        string0 = `${string0} (${enum_getvalue(0, 36, 13275 as cs2enum, quest_getparam(int0, 7831))}.)`;
        if ((STRING_LENGTH(quest_getparam(int0, 7888)) > 0)) {
            string0 = `${string0}<br>${quest_getparam(int0, 7888)}`;
        };
        stack(PUSH_CONSTANT_INT[16]("<col=", int2));
        int3 = script4249(`${stack()}${inttostring()}>Quest Series & Age:</col>`, string0, 98304340, 98304341, 98304342, -1, -1, int1, int3);
    } else {
        string0 = `${enum_getvalue(0, 36, 13275 as cs2enum, quest_getparam(int0, 7831))}.`;
        if ((STRING_LENGTH(quest_getparam(int0, 7888)) > 0)) {
            string0 = `${string0} (${quest_getparam(int0, 7888)})`;
        };
        stack(PUSH_CONSTANT_INT[16]("<col=", int2));
        int3 = script4249(`${stack()}${inttostring()}>Age:</col>`, string0, 98304340, 98304341, 98304342, -1, -1, int1, int3);
    };
    if ((quest_getparam(int0, 7833) == 2)) {
        stack(PUSH_CONSTANT_INT[16]("<col=", int2));
        int3 = script4249(`${stack()}${inttostring()}>Voice-Acted:</col>`, "This quest is fully voice-acted and features atmospheric music and effects. We suggest you keep your sound on to get the most out of it.", 98304346, 98304347, 98304348, -1, -1, int1, int3);
        IF_SETHIDE(false, comp(1500, 346));
    } else if ((quest_getparam(int0, 7833) == 1)) {
        stack(PUSH_CONSTANT_INT[16]("<col=", int2));
        int3 = script4249(`${stack()}${inttostring()}>Voice-Acted:</col>`, "This quest is partially voice-acted. We suggest you keep your sound on to get the most out of it.", 98304346, 98304347, 98304348, -1, -1, int1, int3);
        IF_SETHIDE(false, comp(1500, 346));
    } else if ((quest_getparam(int0, 7833) == 3)) {
        stack(PUSH_CONSTANT_INT[16]("<col=", int2));
        int3 = script4249(`${stack()}${inttostring()}>Music:</col>`, "This quest focuses on music. We suggest you keep your sound effects and music on to get the most out of it.", 98304346, 98304347, 98304348, -1, -1, int1, int3);
        IF_SETHIDE(false, comp(1500, 346));
    } else {
        IF_SETHIDE(true, comp(1500, 346));
    };
    stack(PUSH_CONSTANT_INT[16]("<col=", int2));
    int3 = script4249(`${stack()}${inttostring()}>Requirements:</col>`, varclient_2554, 98304349, 98304350, 98304351, -1, -1, int1, int3);
    if (((MAP_LANG() != 0) && (HAS_NXT() == 1))) {
        CC_DELETEALL(comp(1500, 352));
    } else {
        script13742(varclient_2554, 98304352, 98304351, script2111(int0, 1), script2111(int0, 2), script2111(int0, 3), script2111(int0, 4), script2111(int0, 5), script2111(int0, 6), script2111(int0, 7), script2111(int0, 8), script2111(int0, 9), script2111(int0, 10), script2111(int0, 11), script2111(int0, 12));
    };
    var string2 = script1162(int0);
    if ((STRING_LENGTH(string2) > 0)) {
        stack(PUSH_CONSTANT_INT[16]("<col=", int2));
        int3 = script4249(`${stack()}${inttostring()}>Follows events of:</col>`, string2, 98304353, 98304354, 98304355, -1, -1, int1, int3);
        script13742(string2, 98304356, 98304355, quest_getparam(int0, 7840), quest_getparam(int0, 7841), quest_getparam(int0, 7842), quest_getparam(int0, 7843), quest_getparam(int0, 7844), quest_getparam(int0, 7845), quest_getparam(int0, 7846), quest_getparam(int0, 7847), quest_getparam(int0, 7848), quest_getparam(int0, 7849), quest_getparam(int0, 7850), quest_getparam(int0, 7851));
        IF_SETHIDE(false, comp(1500, 353));
        if ((script6431() == 1)) {
            int3 = (int3 - 25);
        } else {
            int3 = (int3 - 20);
        };
        IF_SETHIDE(false, comp(1500, 357));
        switch (quest_getparam(int0, 7853)) {
            case 1: {
                int3 = script4249("", "To fully appreciate the backstory and events of this quest, and unlock the full rewards, we strongly recommend you first complete the above suggested quests. You may complete the quest without these prerequisites, and claim the rewards at a later date.", 98304357, 98304358, 98304359, -1, -1, int1, int3);
                break;
            }
            case 0: {
                int3 = script4249("", "", 98304357, 98304358, 98304359, -1, -1, int1, int3);
                IF_SETHIDE(true, comp(1500, 357));
                break;
            }
        };
    } else {
        IF_SETHIDE(true, comp(1500, 353));
        IF_SETHIDE(true, comp(1500, 357));
    };
    var string3 = "";
    var string4 = "";
    if ((quest_getparam(int0, 7852) == true)) {
        [string3, string4] = script18529(int0);
    };
    if ((STRING_LENGTH(string4) > 0)) {
        stack(PUSH_CONSTANT_INT[16]("<col=", int2));
        int3 = script4249(`${stack()}${inttostring()}>${string3}</col>`, string4, 98304360, 98304361, 98304362, -1, -1, int1, int3);
        IF_SETHIDE(false, comp(1500, 360));
    } else {
        IF_SETHIDE(true, comp(1500, 360));
    };
    var string5 = script6392(quest_getparam(int0, 949), quest_getparam(int0, 887), quest_getparam(int0, 3822), quest_getparam(int0, 950), quest_getparam(int0, 888), quest_getparam(int0, 4061), quest_getparam(int0, 951), quest_getparam(int0, 889), quest_getparam(int0, 4472), quest_getparam(int0, 952), quest_getparam(int0, 890), quest_getparam(int0, 4812), quest_getparam(int0, 1212), quest_getparam(int0, 891), quest_getparam(int0, 4867), quest_getparam(int0, 1270), quest_getparam(int0, 892), quest_getparam(int0, 5481), quest_getparam(int0, 1330), quest_getparam(int0, 893), quest_getparam(int0, 6529), quest_getparam(int0, 1360), quest_getparam(int0, 894), quest_getparam(int0, 6532), quest_getparam(int0, 1361), quest_getparam(int0, 895), quest_getparam(int0, 6830), quest_getparam(int0, 1362), quest_getparam(int0, 896), quest_getparam(int0, 6831), quest_getparam(int0, 1363), quest_getparam(int0, 898), quest_getparam(int0, 6850), quest_getparam(int0, 3291), quest_getparam(int0, 948), quest_getparam(int0, 6851), quest_getparam(int0, 7815), "None.", ", ");
    stack(PUSH_CONSTANT_INT[16]("<col=", int2));
    int3 = script4249(`${stack()}${inttostring()}>Required Items:</col>`, string5, 98304366, 98304367, 98304368, 98304369, 98304374, int1, int3);
    var string6 = quest_getparam(int0, 7816);
    var int4 = quest_getparam(int0, 857);
    if (((STRING_LENGTH(string6) == STRING_LENGTH("None.")) && (int4 > 1))) {
        if ((int4 == 6)) {
            string6 = `${string6} Combat is scaled and you should bring appropriate equipment and food for your level.`;
        } else {
            string6 = `You must defeat an enemy of at least: ${enum_getvalue(0, 36, 3613 as cs2enum, int4)}.`;
        };
    };
    stack(PUSH_CONSTANT_INT[16]("<col=", int2));
    int3 = script4249(`${stack()}${inttostring()}>Combat:</col>`, string6, 98304375, 98304376, 98304377, -1, -1, int1, int3);
    string0 = `${enum_getvalue(0, 36, 13354 as cs2enum, quest_getparam(int0, 7855))}.`;
    stack(PUSH_CONSTANT_INT[16]("<col=", int2));
    int3 = script4249(`${stack()}${inttostring()}>Length:</col>`, string0, 98304363, 98304364, 98304365, -1, -1, int1, int3);
    switch (int0) {
        case 354: {
            IF_CLEAROPS(comp(1500, 409));
            script13977(98304408, 98304409, 28553, "Offer");
            IF_SETPOSITION(0, IF_GETY(comp(1500, 407)), 1, 0, comp(1500, 407));
            IF_SETHIDE(true, comp(1500, 404));
            IF_SETHIDE(true, comp(1500, 401));
            string0 = varclient_2544;
            break;
        }
        default: {
            string0 = script2134(int0, "", "");
            break;
        }
    };
    stack(PUSH_CONSTANT_INT[16]("<col=", int2));
    int3 = script4249(`${stack()}${inttostring()}>Rewards:</col>`, string0, 98304378, 98304379, 98304380, 98304381, 98304386, int1, int3);
    var string7 = "";
    switch (quest_getparam(int0, 7831)) {
        case 1: {
            string7 = "This is a Fifth Age quest, and takes place in the past, before the gods returned to Gielinor.";
            break;
        }
        case 3: {
            if ((int0 == 361 as quest)) {
                string7 = "The events of this quest trigger the end of the Fifth Age and begins the Sixth Age.<br>It is recommended, but not necessary, to complete Fifth Age quests before Sixth Age quests to fully understand the story of the Sixth Age.";
            } else if ((quest_getparam(int0, 1345) <= 321)) {
                string7 = "This is a Sixth Age quest, and takes place after the events of The World Wakes.<br>The gods are free to return to Gielinor. You are the World Guardian.";
            };
            break;
        }
    };
    if (((STRING_LENGTH(string7) > 0) || (STRING_LENGTH(quest_getparam(int0, 7839)) > 0))) {
        if ((STRING_LENGTH(quest_getparam(int0, 7839)) > 0)) {
            stack(PUSH_CONSTANT_INT[16]("<col=", int2));
            int3 = script4249(`${stack()}${inttostring()}>Note:</col>`, quest_getparam(int0, 7839), 98304387, 98304388, 98304389, -1, -1, int1, int3);
        } else {
            stack(PUSH_CONSTANT_INT[16]("<col=", int2));
            int3 = script4249(`${stack()}${inttostring()}>Note:</col>`, string7, 98304387, 98304388, 98304389, -1, -1, int1, int3);
        };
        IF_SETHIDE(false, comp(1500, 387));
    } else {
        IF_SETHIDE(true, comp(1500, 387));
    };
    switch (quest_getparam(int0, 7831)) {
        case 1: {
            IF_SETHIDE(false, comp(1500, 392));
            IF_SETHIDE(true, comp(1500, 395));
            break;
        }
        case 3:
        case 4: {
            IF_SETHIDE(true, comp(1500, 392));
            IF_SETHIDE(false, comp(1500, 395));
            break;
        }
        default: {
            IF_SETHIDE(true, comp(1500, 392));
            IF_SETHIDE(true, comp(1500, 395));
            break;
        }
    };
    IF_SETSCROLLPOS(0, 0, comp(1500, 339));
    if ((int3 > IF_GETHEIGHT(comp(1500, 339)))) {
        IF_SETSCROLLSIZE(0, int3, comp(1500, 339));
        script7791(98304398, 98304339);
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1500, 339));
        CC_DELETEALL(comp(1500, 398));
    };
    return;
}