//
function script13248(int0: int, int1: component, string0: string): void {
    var int2 = script13165(script13160());
    var string1 = "There are no results that match your selection. Try changing the filters.";
    CC_DELETEALL(int1);
    if ((int0 > 0)) {
        return;
    };
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        if ((AND(script13250(), cc_getparam(6371)) == 0)) {
            string1 = "There are no results. Try changing the availability filter.";
        } else if ((AND(12858, cc_getparam(6372)) == 0)) {
            string1 = "There are no results. Try changing the source filter.";
        } else if ((AND(1328831, cc_getparam(6365)) == 0)) {
            string1 = "There are no results. Try changing the advanced filter.";
        } else if ((strcmp(string0, "") == 0)) {
            if ((((TESTBIT(cc_getparam(6371), 4) == 1) && (TESTBIT(cc_getparam(6371), 1) == 0)) && (TESTBIT(cc_getparam(6371), 3) == 0))) {
                string1 = "There are no new items that match your selection. Try changing the filters.";
            } else if ((((TESTBIT(cc_getparam(6371), 4) == 0) && (TESTBIT(cc_getparam(6371), 1) == 1)) && (TESTBIT(cc_getparam(6371), 3) == 0))) {
                string1 = "There are no owned items that match your selection. Try changing the filters.";
            };
        } else {
            string1 = "There are no results.";
        };
    };
    if ((IF_FIND(int1) == 1)) {
        CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
        CC_SETTEXT(string1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(script10495(6));
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETSIZE(IF_GETWIDTH(int1), script7593(CC_GETTEXT(), IF_GETWIDTH(int1), CC_GETFONTMETRICS(), 0), 0, 0);
        CC_SETPOSITION(0, (IF_GETHEIGHT(int1) / 3), 0, 0);
    };
    return;
}