//
function script1806(string0: string): void {
    script1548(12);
    var string0 = LOWERCASE(REMOVETAGS(string0));
    var int0 = STRING_LENGTH(string0);
    string0 = script2332(string0, "_", " ");
    string0 = script2332(string0, " ", " ");
    while (((STRING_INDEXOF_STRING(string0, " ", 0) == 0) && (int0 > 0))) {
        string0 = SUBSTRING(string0, 1, int0);
        int0 = STRING_LENGTH(string0);
    };
    while (((STRING_INDEXOF_STRING(string0, " ", (int0 - 1)) == (int0 - 1)) && (int0 > 0))) {
        string0 = SUBSTRING(string0, 0, (int0 - 1));
        int0 = STRING_LENGTH(string0);
    };
    if ((strcmp(varclient_2409, string0) == 0)) {
        printmessage("Caller not changed.");
        return;
    };
    varclient_2409 = string0;
    if ((STRING_LENGTH(varclient_2409) > 0)) {
        printmessage(`Caller set: ${script1814(varclient_2409)}`);
    } else {
        printmessage("Caller feature disabled.");
    };
    script1809(17367062, comp(265, 24), comp(265, 25));
    script1809(51707912, comp(789, 10), comp(789, 11));
    script1809(72876036, comp(1112, 6), comp(1112, 7));
    return;
}