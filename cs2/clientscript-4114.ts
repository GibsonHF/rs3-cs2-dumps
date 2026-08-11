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
        IF_SETHIDE(false, comp(109, 29));  // stockcollect:lending_layer_hide
        IF_SETOBJECT(-1 as obj, -1, comp(109, 19));  // stockcollect:lending_item
        IF_SETTEXT("", comp(109, 20));  // stockcollect:lending_indicator
        IF_SETOPBASE("null", comp(109, 19));  // stockcollect:lending_item
        IF_SETOP(1, "null", comp(109, 19));  // stockcollect:lending_item
        return;
    };
    IF_SETHIDE(true, comp(109, 29));  // stockcollect:lending_layer_hide
    IF_SETOBJECT(int0, -1, comp(109, 19));  // stockcollect:lending_item
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int0)}</col>`, comp(109, 19));  // stockcollect:lending_item
    var int1 = 1140;
    IF_SETONMOUSEOVER(callback(script44, 7143442, int1), comp(109, 18));  // stockcollect:lending_item_bg
    int1 = 18266;
    IF_SETONMOUSELEAVE(callback(script44, 7143442, int1), comp(109, 18));  // stockcollect:lending_item_bg
    var string0 = "Lent item";
    var string1 = "Still on loan";
    IF_SETTEXT(string0, comp(109, 17));  // stockcollect:lending_title
    if (((varplayer_429 != -1 as player_uid) || (varplayer_431 > 0))) {
        IF_SETTRANS(200, comp(109, 19));  // stockcollect:lending_item
        IF_SETCOLOUR(16711680, comp(109, 20));  // stockcollect:lending_indicator
        IF_SETOP(1, "Demand", comp(109, 19));  // stockcollect:lending_item
    } else {
        IF_SETTRANS(0, comp(109, 19));  // stockcollect:lending_item
        IF_SETCOLOUR(57088, comp(109, 20));  // stockcollect:lending_indicator
        string1 = "Available";
        IF_SETOP(1, "Reclaim", comp(109, 19));  // stockcollect:lending_item
    };
    IF_SETTEXT(string1, comp(109, 20));  // stockcollect:lending_indicator
    var int2 = MAX(STRINGWIDTH(string0, 28 as fontmetrics), STRINGWIDTH(string1, 26 as fontmetrics));
    int2 = MAX(int2, IF_GETWIDTH(comp(109, 19)));  // stockcollect:lending_item
    int2 = (int2 + 30);
    int2 = MAX(int2, 106);
    int2 = MIN(int2, 178);
    IF_SETSIZE(int2, 73, 0, 0, comp(109, 28));  // stockcollect:lending_container
    return;
}