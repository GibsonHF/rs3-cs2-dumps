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
    script1809(17367062, 17367064, 17367065);
    script1809(51707912, 51707914, 51707915);
    script1809(72876036, 72876038, 72876039);
    return;
}