//
function script400(string0: string, string1: string, string2: string): string {
    var int0 = 0;
    var int1 = 0;
    var string3 = "";
    var string4 = "";
    var int2 = STRING_LENGTH(string0);
    var int3 = STRING_LENGTH(string1);
    if ((int2 > 0)) {
        int1 = STRING_INDEXOF_STRING(string0, string1, int1);
        while ((int1 != -1)) {
            string4 = SUBSTRING(string0, int0, int1);
            if ((strcmp(string4, "") != 0)) {
                string3 = `${string3}${string4}${string2}`;
            };
            int1 = (int1 + int3);
            int0 = int1;
            int1 = STRING_INDEXOF_STRING(string0, string1, int1);
        };
        string4 = SUBSTRING(string0, int0, int2);
        if ((strcmp(string4, "") != 0)) {
            string3 = `${string3}${string4}`;
        };
    };
    return string3;
}