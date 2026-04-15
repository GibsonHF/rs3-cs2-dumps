//
function script4001(int0: struct, string0: string, string1: string): string {
    var string2 = string0;
    if ((struct_getparam(int0, 1345) > 0)) {
        if ((STRING_LENGTH(quest_getparam(struct_getparam(int0, 1403), 7814)) > 0)) {
            if ((strcmp(string0, "") != 0)) {
                var string0 = strconcat(string0, "<br>");
            };
            string0 = strconcat(string0, "Quest Start:<br>");
            string0 = strconcat(string0, quest_getparam(struct_getparam(int0, 1403), 7814));
        };
        if ((STRING_LENGTH(quest_getparam(struct_getparam(int0, 1403), 5968)) > 0)) {
            if ((strcmp(string0, "") != 0)) {
                if ((STRING_LENGTH(quest_getparam(struct_getparam(int0, 1403), 7814)) > 0)) {
                    string0 = strconcat(string0, "<br><br>");
                } else {
                    string0 = strconcat(string0, "<br>");
                };
            };
            string0 = strconcat(string0, "Description:<br>");
            string0 = strconcat(string0, quest_getparam(struct_getparam(int0, 1403), 5968));
        };
    };
    if ((((strcmp(string2, "") == 0) && (strcmp(string0, "") != 0)) && (strcmp(string1, "") != 0))) {
        string0 = strconcat(string0, "<br>");
    };
    return string0;
}