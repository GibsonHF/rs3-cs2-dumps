//
function script4343(int0: component): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var string8 = "";
    var string9 = "";
    var string10 = "";
    [string0, string1, string2, string3, string4, string5, string6, string7, string8, string9] = script4721();
    if ((strcmp(string0, "") != 0)) {
        string10 = string0;
    };
    if ((strcmp(string1, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string1);
    };
    if ((strcmp(string2, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string2);
    };
    if ((strcmp(string3, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string3);
    };
    if ((strcmp(string4, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string4);
    };
    if ((strcmp(string5, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string5);
    };
    if ((strcmp(string6, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string6);
    };
    if ((strcmp(string7, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string7);
    };
    if ((strcmp(string8, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string8);
    };
    if ((strcmp(string9, "") != 0)) {
        if ((STRING_LENGTH(string10) > 0)) {
            string10 = strconcat(string10, ", ");
        };
        string10 = strconcat(string10, string9);
    };
    IF_SETTEXT(string10, int0);
    return;
}