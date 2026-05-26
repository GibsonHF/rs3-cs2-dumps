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
    var int0 = INV_GETOBJ(540, 0);
    if ((int0 == -1)) {
        IF_SETHIDE(0, 7143453);
        IF_SETOBJECT(-1, -1, 7143443);
        IF_SETTEXT("", 7143444);
        IF_SETOPBASE("null", 7143443);
        IF_SETOP(1, "null", 7143443);
        return;
    };
    IF_SETHIDE(1, 7143453);
    IF_SETOBJECT(int0, -1, 7143443);
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int0)}</col>`, 7143443);
    var int1 = 1140;
    IF_SETONMOUSEOVER(callback(script44, 7143442, int1), 7143442);
    int1 = 18266;
    IF_SETONMOUSELEAVE(callback(script44, 7143442, int1), 7143442);
    var string0 = "Lent item";
    var string1 = "Still on loan";
    IF_SETTEXT(string0, 7143441);
    if (((varplayer_429 != -1) || (varplayer_431 > 0))) {
        IF_SETTRANS(200, 7143443);
        IF_SETCOLOUR(16711680, 7143444);
        IF_SETOP(1, "Demand", 7143443);
    } else {
        IF_SETTRANS(0, 7143443);
        IF_SETCOLOUR(57088, 7143444);
        string1 = "Available";
        IF_SETOP(1, "Reclaim", 7143443);
    };
    IF_SETTEXT(string1, 7143444);
    var int2 = MAX(STRINGWIDTH(string0, 28), STRINGWIDTH(string1, 26));
    int2 = MAX(int2, IF_GETWIDTH(7143443));
    int2 = MAX(++int2, 106);
    int2 = MIN(int2, 178);
    IF_SETSIZE(int2, 73, 0, 0, 7143452);
    return;
}