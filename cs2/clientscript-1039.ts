//[proc,quickchat_objdialog_dosearch]
function script1039(int0: unknown_int, int1: component, int2: component, int3: unknown_int, int4: int): void {
    script8618(int4, -1);
    var int5 = OC_FIND(script8611(int4), script8619(int4));
    var int6 = IF_GETWIDTH(int1);
    var int7 = (int6 - 8);
    if ((int5 == -1)) {
        CC_CREATE(int1, 4, 0);
        CC_SETPOSITION(0, 48, 0, 0);
        CC_SETSIZE(int6, 14, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT("Too many results. Please refine your search.");
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
        IF_SETSCROLLSIZE(0, 0, int1);
        script1042(int1, int2);
        return;
    };
    if ((int5 == 0)) {
        CC_CREATE(int1, 4, 0);
        CC_SETPOSITION(0, 48, 0, 0);
        CC_SETSIZE(int6, 14, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT("No matching items found.");
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
        IF_SETSCROLLSIZE(0, 0, int1);
        script1042(int1, int2);
        return;
    };
    var int8 = 1;
    var int9 = OC_FINDNEXT();
    var string0 = "";
    var int10 = -1 as struct;
    CC_CREATE(int1, 3, 0);
    var int11 = 0;
    while ((int9 != -1 as obj)) {
        int10 = item_getparam(int9, 4749);
        if ((item_getparam(int9, 6628) != 0)) {
            int11 = item_getparam(int9, 6628);
        } else if ((item_getparam(int9, 4749) != -1 as struct)) {
            int11 = script766(item_getparam(int9, 4749));
        } else {
            int11 = item_getparam(int9, 4742);
        };
        if ((((((((((strcmp(string0, OC_NAME(int9)) != 0) && (enum_getvalue(33, 0, 1547 as cs2enum, int9) == 0)) && (item_getparam(int9, 2531) == 0)) && (item_getparam(int9, 5051) == -1 as struct)) && (item_getparam(int9, 4163) == false)) && (OC_CATEGORY(int9) != 2841 as category)) && (strcmp(LOWERCASE(OC_NAME(int9)), "null") != 0)) && (varplayer_3079 >= item_getparam(int9, 4742))) && ((int10 == -1 as struct) || (varplayer_3079 >= int11)))) {
            string0 = OC_NAME(int9);
            CC_CREATE(int1, 4, int8);
            CC_SETPOSITION(4, (14 * (int8 - 1)), 0, 0);
            CC_SETSIZE(int7, 14, 0, 0);
            CC_SETCOLOUR(16777215);
            CC_SETTEXT(OC_NAME(int9));
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETONMOUSEOVER(callback(script1043, int8, int1, int4));
            CC_SETONCLICK(callback(script1075, int0, int3, int9, int4));
            int8 = (int8 + 1);
        };
        int9 = OC_FINDNEXT();
    };
    if ((int8 == 1)) {
        CC_CREATE(int1, 4, 0);
        CC_SETPOSITION(0, 48, 0, 0);
        CC_SETSIZE(int6, 14, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT("No matching items found.");
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
        IF_SETSCROLLSIZE(0, 0, int1);
        script1042(int1, int2);
        return;
    };
    IF_SETSCROLLSIZE(0, (14 * (int8 - 1)), int1);
    script1042(int1, int2);
    return;
}