//[proc,displayname_simplify]
function script4591(string0: string): string {
    var string0 = LOWERCASE(REMOVETAGS(string0));
    var int0 = STRING_LENGTH(string0);
    var int1 = 0;
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
    return string0;
}