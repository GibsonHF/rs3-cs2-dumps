//[proc,stockcollect_refresh]
function script4114(): void {
    script662(0);
    script662(1);
    script662(2);
    script662(3);
    script662(4);
    script662(5);
    script662(6);
    script662(7);
    script186();
    var int0 = INV_GETOBJ(540 as inv, 0);
    if ((int0 == -1 as obj)) {
        IF_SETHIDE(false, comp(109, 29));
        IF_SETOBJECT(-1 as obj, -1, comp(109, 19));
        IF_SETTEXT("", comp(109, 20));
        IF_SETOPBASE("null", comp(109, 19));
        IF_SETOP(1, "null", comp(109, 19));
        return;
    };
    IF_SETHIDE(true, comp(109, 29));
    IF_SETOBJECT(int0, -1, comp(109, 19));
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int0)}</col>`, comp(109, 19));
    var int1 = 1140;
    IF_SETONMOUSEOVER(callback(script44, 7143442, int1), comp(109, 18));
    int1 = 18266;
    IF_SETONMOUSELEAVE(callback(script44, 7143442, int1), 7143442);
    var string0 = "Lent item";
    var string1 = "Still on loan";
    IF_SETTEXT(string0, 7143441);
    if (((varplayer_429 != -1) || (varplayer_431 > 0))) {
        IF_SETTRANS(200, comp(109, 19));
        IF_SETCOLOUR(16711680, comp(109, 20));
        IF_SETOP(1, "Demand", comp(109, 19));
    } else {
        IF_SETTRANS(0, comp(109, 19));
        IF_SETCOLOUR(57088, comp(109, 20));
        string1 = "Available";
        IF_SETOP(1, "Reclaim", comp(109, 19));
    };
    IF_SETTEXT(string1, comp(109, 20));
    var int2 = MAX(STRINGWIDTH(string0, 28 as fontmetrics), STRINGWIDTH(string1, 26 as fontmetrics));
    int2 = MAX(int2, IF_GETWIDTH(comp(109, 19)));
    int2 = MAX(++int2, 106);
    int2 = MIN(int2, 178);
    IF_SETSIZE(int2, 73, 0, 0, comp(109, 28));
    return;
}