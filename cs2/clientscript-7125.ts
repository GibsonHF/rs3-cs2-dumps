//
function script7125(int0: fontmetrics, int1: int, string0: string): [string, int] {
    define_array(20);
    var int2 = 0;
    var int3 = 0;
    while (((int2 != -1) && (int3 < 19))) {
        pop_array(int3, int2);
        int3 = (int3 + 1);
        int2 = STRING_INDEXOF_STRING(string0, " ", (int2 + 1));
    };
    pop_array(int3, STRING_LENGTH(string0));
    while ((int3 < 19)) {
        pop_array(++int3, -1);
    };
    var string1 = "";
    var string2 = "";
    var string3 = "";
    int3 = 1;
    while (((int3 < 20) && (push_array(int3) != -1))) {
        string3 = SUBSTRING(string0, push_array((int3 - 1)), push_array(int3));
        if ((STRINGWIDTH(strconcat(string2, string3), int0) > int1)) {
            if ((strcmp(string1, "") == 0)) {
                string1 = string2;
            } else {
                string1 = `${string1}<br>${string2}`;
            };
            string2 = string3;
        } else {
            string2 = strconcat(string2, string3);
        };
        int3 = (int3 + 1);
    };
    if ((strcmp(string1, "") == 0)) {
        string1 = string2;
    } else {
        string1 = `${string1}<br>${string2}`;
    };
    return [string1, PARAHEIGHT(string1, int1, int0)];
}