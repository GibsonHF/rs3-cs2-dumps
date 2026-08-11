//
function script20709(): void {
    if ((varclient_8442 == -1)) {
        return;
    };
    if ((varclient_8442 == 43)) {
        if ((CC_FINDBYCATEGORY(comp(1499, 36), varclient_8442, 1) == 1)) {  // construction_house_furniture_portal_nexus_configure:active_scrolling
            CC_SETHIDE(true);
        };
    } else if ((CC_FINDBYCATEGORY(comp(1499, 36), varclient_8442, 0) == 1)) {  // construction_house_furniture_portal_nexus_configure:active_scrolling
        CC_SETSIZE(0, 34, 1, 0);
        IF_SETSCROLLSIZE(0, (IF_GETSCROLLHEIGHT(comp(1499, 36)) - 34), comp(1499, 36));  // construction_house_furniture_portal_nexus_configure:active_scrolling
        script72(98238501, 98238500, IF_GETSCROLLY(comp(1499, 36)));  // construction_house_furniture_portal_nexus_configure:active_scrolling
    };
    varclient_8442 = -1;
    return;
}