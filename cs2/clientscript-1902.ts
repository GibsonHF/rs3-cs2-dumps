//
function script1902(int0: unknown_int, int1: component, int2: component, int3: int): void {
    script8618(int3, -1);
    var int4 = CHATPHRASE_FIND(script8611(int3), 0);
    var int5 = IF_GETWIDTH(int1);
    var int6 = (int5 - 8);
    if ((int4 == -1)) {
        CC_CREATE(int1, 4, 0);
        CC_SETPOSITION(0, 48, 0, 0);
        CC_SETSIZE(int5, 14, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT("Too many results. Please refine your search.");
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
        IF_SETSCROLLSIZE(0, 0, int1);
        script1905(int1, int2);
        return;
    };
    if ((int4 == 0)) {
        CC_CREATE(int1, 4, 0);
        CC_SETPOSITION(0, 48, 0, 0);
        CC_SETSIZE(int5, 14, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT("No matching items found.");
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
        IF_SETSCROLLSIZE(0, 0, int1);
        script1905(int1, int2);
        return;
    };
    var int7 = 1;
    var int8 = CHATPHRASE_FINDNEXT();
    var string0 = "";
    CC_CREATE(int1, 3, 0);
    while ((int8 != -1 as chatphrase)) {
        if ((strcmp(string0, CHATPHRASE_GETTEXT(int8)) != 0)) {
            string0 = CHATPHRASE_GETTEXT(int8);
            CC_CREATE(int1, 4, int7);
            CC_SETPOSITION(4, (14 * (int7 - 1)), 0, 0);
            CC_SETSIZE(int6, 14, 0, 0);
            CC_SETCOLOUR(16777215);
            CC_SETTEXT(CHATPHRASE_GETTEXT(int8));
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETONMOUSEOVER(callback(script1906, int7, int1, int3));
            CC_SETONCLICK(callback(script1070, int0, int8, 0, int3));
            int7 = (int7 + 1);
        };
        int8 = CHATPHRASE_FINDNEXT();
    };
    if ((int7 == 1)) {
        CC_CREATE(int1, 4, 0);
        CC_SETPOSITION(0, 48, 0, 0);
        CC_SETSIZE(int5, 14, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT("No matching items found.");
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
        IF_SETSCROLLSIZE(0, 0, int1);
        script1905(int1, int2);
        return;
    };
    IF_SETSCROLLSIZE(0, (14 * (int7 - 1)), int1);
    script1905(int1, int2);
    return;
}