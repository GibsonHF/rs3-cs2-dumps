//
function script19155(int0: fontmetrics, string0: string): int {
    var int1 = (1 + script15884(string0, " "));
    if ((int1 == 1)) {
        return STRINGWIDTH(string0, int0);
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string1 = "";
    var int5 = STRING_LENGTH(string0);
    while ((int3 != int5)) {
        int4 = STRING_INDEXOF_CHAR(string0, 32, int3);
        if ((int4 == -1)) {
            int4 = int5;
        };
        string1 = SUBSTRING(string0, int3, int4);
        int2 = MAX(int2, STRINGWIDTH(string1, int0));
        int3 = MIN((int4 + 1), int5);
    };
    return int2;
}