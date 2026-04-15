//
function script2104(int0: quest): string {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return "";
    };
    QUEST_GETSORTNAME(int0);
    var string0 = stack();
    var string1 = "";
    if ((STRING_LENGTH(string0) == 0)) {
        string1 = script2103(int0);
        script12478(`No sortname= specified for quest_id #${inttostring(quest_getparam(int0, 1345), 10)} ${string1}.`);
    };
    return string0;
}