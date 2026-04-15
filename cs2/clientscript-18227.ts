//
function script18227(int0: obj, int1: int): void {
    IF_SETHIDE(false, comp(1343, 172));
    IF_SETTEXT(OC_NAME(int0), comp(1343, 187));
    IF_SETOBJECT_ALWAYSNUM(int0, int1, comp(1343, 189));
    var string0 = "";
    if (((OC_MEMBERS(int0) == 0) || ((OC_MEMBERS(int0) == 1) && (MAP_MEMBERS() == 1)))) {
        string0 = OC_DESC(int0);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, comp(1343, 190));
    } else {
        IF_SETTEXT(item_getparam(int0, 4085), comp(1343, 190));
    };
    return;
}