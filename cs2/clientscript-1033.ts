//[proc,quickchat_tutorial_displaydata]
function script1033(string0: string): void {
    var string1 = "";
    var int0 = 0;
    int0 = STRING_INDEXOF_STRING(string0, "|", 0);
    if ((int0 != -1)) {
        string1 = SUBSTRING(string0, (int0 + 1), STRING_LENGTH(string0));
    } else {
        string1 = string0;
    };
    IF_SETTEXT(SUBSTRING(string0, 0, int0), comp(157, 0));
    var int1 = 0;
    var int2 = 0;
    int1 = (PARAHEIGHT(string1, 400, 27 as fontmetrics) * 12);
    int2 = IF_GETHEIGHT(comp(157, 3));
    int2 = ((IF_GETHEIGHT(comp(157, 3)) / 2) - (int1 / 2));
    script1034(0, 35, int2, 400, 100, string1, 16777215);
    return;
}