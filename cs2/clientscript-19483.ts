//
function script19483(int0: unknown_int, int1: unknown_int, string0: string, string1: string, string2: string): void {
    if ((IF_HASSUBMODAL(comp(1477, 693), 1313 as interface) == 0)) {
        IF_RESUME_PAUSEBUTTON(86048901);
        IF_SETHIDE(true, comp(1313, 122));
        return;
    };
    IF_SETHIDE(false, comp(1313, 122));
    IF_SETHIDE(false, comp(1313, 132));
    IF_SETHIDE(false, comp(1313, 133));
    IF_SETHIDE(false, comp(1313, 131));
    IF_SETONCLICK(callback(script19484), comp(1313, 123));
    if ((int0 != -1)) {
        IF_SETONCLICK(callback(script19484), comp(1313, 132));
        IF_SETOBJECT_NONUM(int0, 100, 86048899);
        IF_SETHIDE(0, 86048898);
        IF_SETPOSITION((5 + IF_GETWIDTH(86048898)), IF_GETY(86048897), 0, 0, 86048897);
    } else {
        IF_SETOBJECT(-1 as obj, 0, comp(1313, 131));
        IF_SETHIDE(true, comp(1313, 130));
        IF_SETPOSITION(0, IF_GETY(comp(1313, 129)), 1, 0, comp(1313, 129));
    };
    script13979(comp(1313, 132), comp(-1, 65535), 28553 as struct, false, string2, string2);
    IF_SETTEXT(string0, comp(1313, 126));
    IF_SETTEXT(string1, comp(1313, 129));
    var int2 = script7593(string1, IF_GETWIDTH(comp(1313, 129)), IF_GETFONTMETRICS(comp(1313, 129)), 0);
    int2 = MAX(int2, IF_GETHEIGHT(comp(1313, 130)));
    IF_SETSIZE(0, int2, 1, 0, comp(1313, 128));
    IF_SETSIZE(IF_GETWIDTH(comp(1313, 124)), ((int2 + 48) + 37), 0, 0, comp(1313, 124));
    return;
}