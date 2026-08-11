//
function script18227(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(1343, 172));  // jobs_main:information_panel
    IF_SETTEXT(OC_NAME(int0), comp(1343, 187));  // jobs_main:item_name
    IF_SETOBJECT_ALWAYSNUM(int0, int1, comp(1343, 189));  // jobs_main:item_graphic
    var string0 = "";
    if ((OC_MEMBERS(int0) == 0)) {
        string0 = OC_DESC(int0);
    } else if (((OC_MEMBERS(int0) == 1) && (MAP_MEMBERS() == 1))) {
        string0 = OC_DESC(int0);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, comp(1343, 190));  // jobs_main:level_description
    } else {
        IF_SETTEXT(item_getparam(int0, 4085), comp(1343, 190));  // jobs_main:level_description
    };
    return;
}