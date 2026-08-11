//
function script20710(int0: number, int1: number): void {
    if ((varclient_8440 == comp(-1, 65535))) {
        return;
    };
    if (((varclient_8440 == int0) && (varclient_8441 == int1))) {
        script20709();
        return;
    };
    var int2 = UI_GETCATEGORY(int1);
    if (((varclient_8442 != -1) && (varclient_8442 != int2))) {
        script20709();
    };
    varclient_8442 = int2;
    if ((int2 == 43)) {
        if ((CC_FINDBYCATEGORY(int0, int2, 1) == 1)) {
            CC_SETHIDE(false);
        };
        return;
    };
    if ((CC_FINDBYCATEGORY(int0, int2, 0) == 1)) {
        CC_SETSIZE(0, (34 * 2), 1, 0);
        IF_SETSCROLLSIZE(0, (IF_GETSCROLLHEIGHT(comp(1499, 36)) + 34), comp(1499, 36));  // construction_house_furniture_portal_nexus_configure:active_scrolling
        script72(98238501, 98238500, IF_GETSCROLLY(comp(1499, 36)));  // construction_house_furniture_portal_nexus_configure:active_scrolling
    };
    if (((CC_FINDBYCATEGORY(int0, int2, 1) == 1) && (CC_FINDBYCATEGORY[1](int0, int2, 2) == 1))) {
        if ((int2 < UI_GETCATEGORY(varclient_8441))) {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETPOSITION[1](0, 0, 0, 2);
        } else if ((int2 > UI_GETCATEGORY(varclient_8441))) {
            CC_SETPOSITION(0, 0, 0, 2);
            CC_SETPOSITION[1](0, 0, 0, 0);
        };
    };
    return;
}