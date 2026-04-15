//
function script19452(): void {
    var string0 = ACTIVECLANCHANNEL_GETCLANNAME();
    var string1 = `${script19387()}<nbsp><sprite=34560>`;
    var string2 = script19324(varbitplayer_56614, varbitplayer_56616);
    var string3 = script19388();
    var string4 = inttostring(varbitclansettings_56587, 10);
    var int0 = true;
    var string5 = "Rename";
    var int1 = script6427(varbitplayer_56575);
    var string6 = "Leave";
    var int2 = false;
    var string7 = "Downgrade";
    var int3 = ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT();
    var int4 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    [int5, int6, int7] = script19415(12, int4);
    if (((DATE_MINUTES() - varplayer_11957) < (1440 * 28))) {
        int0 = false;
    } else if ((ACTIVECLANSETTINGS_GETAFFINEDCOUNT() == 1)) {
        string5 = "Rename";
    } else if ((int5 > 0)) {
        if ((int3 == int4)) {
            if ((int6 == 1)) {
                if ((int5 < int7)) {
                    string5 = "Rename <sprite=13165>";
                } else {
                    string5 = "Rename <sprite=13165><sprite=21748>";
                };
            } else {
                string5 = "Rename <sprite=21748>";
            };
        } else if ((int6 == 1)) {
            string5 = "Rename <sprite=13165>";
            int0 = true;
        } else {
            string5 = "Rename <sprite=21748>";
        };
    };
    if (((script19320() == 1) || (varbitclansettings_56581 == 0))) {
        [int5, int6, int7] = script19415(11, int4);
        if ((ACTIVECLANSETTINGS_GETAFFINEDCOUNT() == 1)) {
            string7 = "Downgrade";
            int2 = true;
        } else if ((int6 == 0)) {
            if ((int5 > 0)) {
                string7 = "Downgrade <sprite=21748>";
            };
            int2 = true;
        } else {
            string7 = "Downgrade <sprite=13165>";
            int2 = true;
        };
    };
    script19454(string0, string1, string2, string3, string4, int0, string5, int1, string6, int2, string7);
    return;
}