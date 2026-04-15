//
function script6985(int0: component, string0: string): void {
    var int1 = STRINGWIDTH(string0, IF_GETFONTMETRICS(int0));
    var int2 = IF_GETWIDTH(int0);
    if ((int1 < int2)) {
        IF_SETTEXT(string0, int0);
        return;
    };
    var int3 = STRING_LENGTH(string0);
    var int4 = 1;
    var string1 = "";
    while ((int3 > 0)) {
        string1 = SUBSTRING(string0, 0, ((STRING_LENGTH(string0) - 1) - int4));
        string1 = strconcat(string1, "...");
        int1 = STRINGWIDTH(string1, IF_GETFONTMETRICS(int0));
        if ((int1 < int2)) {
            IF_SETTEXT(string1, int0);
            return;
        };
        int4 = (int4 + 1);
        int3 = (int3 - 1);
    };
    return;
}