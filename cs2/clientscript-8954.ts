//
function script8954(int0: struct, int1: int, string0: string): string {
    var string1 = "";
    var string2 = "";
    if ((int1 == -1)) {
        string2 = "Requirements:";
        string1 = script13327(int0);
        string1 = script4001(string1, int0, string0);
        if ((strcmp(string1, "") != 0)) {
            string2 = strconcat(string2, `<br>${string1}`);
            string2 = script13616(string2, int0);
            if ((strcmp(string0, "") != 0)) {
                string2 = strconcat(string2, `<br>${string0}`);
            };
        } else if ((strcmp(string0, "") != 0)) {
            string2 = script13616(string2, int0);
            string2 = strconcat(string2, `<br>${string0}`);
        } else {
            string2 = "";
        };
    } else {
        string2 = script4001(string2, int0, string0);
        if (((((strcmp(struct_getparam(int0, 1274), "") != 0) || (strcmp(struct_getparam(int0, 8082), "") != 0)) || (strcmp(struct_getparam(int0, 2225), "") != 0)) || (strcmp(struct_getparam(int0, 8081), "") != 0))) {
            string2 = script13616(string2, int0);
            string2 = strconcat(string2, `<br>${string0}`);
        } else if ((strcmp(string0, "") != 0)) {
            string2 = strconcat(string2, `<br>${string0}`);
        };
    };
    return string2;
}