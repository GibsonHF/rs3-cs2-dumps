//
function script11243(int0: int, string0: string): string {
    if ((STRINGWIDTH(string0, 26 as fontmetrics) < int0)) {
        return string0;
    };
    var int1 = STRING_LENGTH(string0);
    var string1 = strconcat(string0, "...");
    var int2 = STRINGWIDTH(string0, 26 as fontmetrics);
    while (((int1 > 0) && (int2 > int0))) {
        string1 = strconcat(SUBSTRING(string0, 0, int1), "...");
        int2 = STRINGWIDTH(string1, 26 as fontmetrics);
        int1 = (int1 - 1);
    };
    return string1;
}