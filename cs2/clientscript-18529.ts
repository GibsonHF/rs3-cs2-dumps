//
function script18529(int0: quest): [string, string] {
    var string0 = "";
    if ((int0 == -1 as quest)) {
        return ["", ""];
    };
    var string1 = "Suggestions:";
    if ((quest_getparam(int0, 7889) == 2)) {
        string1 = "To play the unabridged version:";
    };
    var string2 = "";
    switch (int0) {
        case 339: {
            string2 = script1164(varbitplayer_13049, 1, "Complete a Pest Control minigame");
            break;
        }
        case 342: {
            string2 = script1164(varbitplayer_5420, 1, "Complete Conquest tutorial");
            break;
        }
        case 416: {
            string2 = script18526(0 as stat, 30);
            string2 = strconcat(string2, "<br>");
            string2 = strconcat(string2, script18526(4 as stat, 30));
            string2 = strconcat(string2, "<br>");
            string2 = strconcat(string2, script18526(6 as stat, 30));
            break;
        }
        case 417: {
            string2 = script18526(16 as stat, 55);
            string2 = strconcat(string2, "<br>");
            string2 = strconcat(string2, script18526(17 as stat, 55));
            break;
        }
        case 418: {
            string2 = script18526(2 as stat, 70);
            break;
        }
        case 419: {
            string2 = script18526(0 as stat, 60);
            string2 = strconcat(string2, "<br>");
            string2 = strconcat(string2, script18526(17 as stat, 45));
            string2 = strconcat(string2, "<br>");
            string2 = strconcat(string2, script18526(24 as stat, 55));
            break;
        }
        case 420: {
            string2 = script18526(2 as stat, 75);
            break;
        }
        case 116: {
            string2 = script18526(6 as stat, 59);
            break;
        }
        default: {
            string0 = script2103(int0);
            script12478(`${string0} has param=quest_suggested_special,^true but no special case in [proc,ql4_suggested_special].`);
            break;
        }
    };
    return [string1, string2];
}