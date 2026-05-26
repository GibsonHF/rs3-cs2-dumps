//
function script19483(int0: number, int1: number, string0: string, string1: string, string2: string): void {
    if ((IF_HASSUBMODAL(96797365, 1313) == 0)) {
        IF_RESUME_PAUSEBUTTON(86048901);
        IF_SETHIDE(1, 86048890);
        return;
    };
    IF_SETHIDE(0, 86048890);
    IF_SETHIDE(0, 86048900);
    IF_SETHIDE(0, 86048901);
    IF_SETHIDE(0, 86048899);
    IF_SETONCLICK(callback(script19484), 86048891);
    if ((int0 != -1)) {
        IF_SETONCLICK(callback(script19484), 86048900);
        IF_SETOBJECT_NONUM(int0, 100, 86048899);
        IF_SETHIDE(0, 86048898);
        IF_SETPOSITION((5 + IF_GETWIDTH(86048898)), IF_GETY(86048897), 0, 0, 86048897);
    } else {
        IF_SETOBJECT(-1, 0, 86048899);
        IF_SETHIDE(1, 86048898);
        IF_SETPOSITION(0, IF_GETY(86048897), 1, 0, 86048897);
    };
    script13979(86048900, -1, 28553, 0, string2, string2);
    IF_SETTEXT(string0, 86048894);
    IF_SETTEXT(string1, 86048897);
    var int2 = script7593(string1, IF_GETWIDTH(86048897), IF_GETFONTMETRICS(86048897), 0);
    int2 = MAX(int2, IF_GETHEIGHT(86048898));
    IF_SETSIZE(0, int2, 1, 0, 86048896);
    IF_SETSIZE(IF_GETWIDTH(86048892), ((int2 + 48) + 37), 0, 0, 86048892);
    return;
}