//[proc,objdialog_dosearch]
function script577(string0: string): void {
    var int0 = OC_FIND(string0, true);
    var int1 = IF_GETWIDTH(comp(389, 2));
    var int2 = (int1 - 8);
    if ((int0 == -1)) {
        CC_CREATE(comp(389, 2), 4, 0);
        CC_SETPOSITION(0, 48, 0, 0);
        CC_SETSIZE(int1, 16, 0, 0);
        CC_SETTEXTFONT(53 as fontmetrics);
        CC_SETTEXT("Too many results. Please refine your search.");
        CC_SETTEXTALIGN(1, 1, 0);
        script6888(3);
        CC_SETTEXTSHADOW(true);
        IF_SETSCROLLSIZE(0, 0, comp(389, 2));
        script578();
        return;
    };
    if ((int0 == 0)) {
        CC_CREATE(comp(389, 2), 4, 0);
        CC_SETPOSITION(0, 48, 0, 0);
        CC_SETSIZE(int1, 16, 0, 0);
        CC_SETTEXTFONT(53 as fontmetrics);
        CC_SETTEXT("No matching items found.");
        CC_SETTEXTALIGN(1, 1, 0);
        script6888(3);
        CC_SETTEXTSHADOW(true);
        IF_SETSCROLLSIZE(0, 0, comp(389, 2));
        script578();
        return;
    };
    var int3 = 1;
    var int4 = 0;
    var int5 = 0;
    var int6 = OC_FINDNEXT();
    CC_CREATE(comp(389, 2), 3, 0);
    while ((int6 != -1 as obj)) {
        int4 = 0;
        int5 = 0;
        if ((item_getparam(int6, 6628) != 0)) {
            int5 = item_getparam(int6, 6628);
        } else if ((item_getparam(int6, 4749) != -1 as struct)) {
            int5 = script766(item_getparam(int6, 4749));
        } else {
            int5 = item_getparam(int6, 4742);
        };
        if ((varplayer_3079 < int5)) {
            int6 = OC_FINDNEXT();
            int4 = 1;
        };
        if ((int4 == 0)) {
            CC_CREATE(comp(389, 2), 4, int3);
            CC_SETPOSITION(4, (15 * (int3 - 1)), 0, 0);
            CC_SETSIZE(int2, 15, 0, 0);
            script6888(3);
            CC_SETTEXT(OC_NAME(int6));
            CC_SETTEXTFONT(27 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETONMOUSEOVER(callback(script579, int3, int6));
            CC_SETONCLICK(callback(script580, int6));
            int6 = OC_FINDNEXT();
            int3 = (int3 + 1);
        };
    };
    IF_SETSCROLLSIZE(0, (15 * (int3 - 1)), comp(389, 2));
    script578();
    return;
}