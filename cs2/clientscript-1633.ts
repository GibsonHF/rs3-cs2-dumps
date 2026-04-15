//[proc,friendschat_kick]
function script1633(string0: string): void {
    var string0 = LOWERCASE(REMOVETAGS(string0));
    var int0 = STRING_LENGTH(string0);
    var int1 = 0;
    string0 = script2332(string0, "_", " ");
    string0 = script2332(string0, "-", " ");
    string0 = script2332(string0, " ", " ");
    while (((STRING_INDEXOF_STRING(string0, " ", 0) == 0) && (int0 > 0))) {
        string0 = SUBSTRING(string0, 1, int0);
        int0 = STRING_LENGTH(string0);
    };
    while (((STRING_INDEXOF_STRING(string0, " ", (int0 - 1)) == (int0 - 1)) && (int0 > 0))) {
        string0 = SUBSTRING(string0, 0, (int0 - 1));
        int0 = STRING_LENGTH(string0);
    };
    while (((STRING_INDEXOF_STRING(string0, " ", 0) == 0) && (int0 > 0))) {
        string0 = SUBSTRING(string0, 1, int0);
        int0 = STRING_LENGTH(string0);
    };
    while (((STRING_INDEXOF_STRING(string0, " ", (int0 - 1)) == (int0 - 1)) && (int0 > 0))) {
        string0 = SUBSTRING(string0, 0, (int0 - 1));
        int0 = STRING_LENGTH(string0);
    };
    var string1 = LOWERCASE(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    int0 = STRING_LENGTH(string1);
    string1 = script2332(string1, "_", " ");
    string1 = script2332(string1, "-", " ");
    string1 = script2332(string1, " ", " ");
    while (((STRING_INDEXOF_STRING(string1, " ", 0) == 0) && (int0 > 0))) {
        string1 = SUBSTRING(string1, 1, int0);
        int0 = STRING_LENGTH(string1);
    };
    while (((STRING_INDEXOF_STRING(string0, " ", (int0 - 1)) == (int0 - 1)) && (int0 > 0))) {
        string1 = SUBSTRING(string1, 0, (int0 - 1));
        int0 = STRING_LENGTH(string1);
    };
    while (((STRING_INDEXOF_STRING(string1, " ", 0) == 0) && (int0 > 0))) {
        string1 = SUBSTRING(string1, 1, int0);
        int0 = STRING_LENGTH(string1);
    };
    while (((STRING_INDEXOF_STRING(string1, " ", (int0 - 1)) == (int0 - 1)) && (int0 > 0))) {
        string1 = SUBSTRING(string1, 0, (int0 - 1));
        int0 = STRING_LENGTH(string1);
    };
    if ((strcmp(string0, "") != 0)) {
        if ((strcmp(string0, string1) == 0)) {
            script1890("You cannot kick or ban yourself.");
            return;
        };
        CLAN_KICKUSER(string0);
        string0 = script1814(string0);
        stack(1);
        CHAT_SETMODE();
        CHAT_SENDPUBLIC("[Attempting to kick/ban user from this Friends Chat.]");
    };
    return;
}