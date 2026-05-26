//
function script3844(int0: number, int1: number, string0: string, string1: string, string2: string): void {
    if ((IF_HASSUBMODAL(96797365, 517) == 0)) {
        IF_RESUME_PAUSEBUTTON(33882441);
        IF_SETHIDE(1, 33882430);
        return;
    };
    IF_SETHIDE(0, 33882430);
    IF_SETHIDE(0, 33882440);
    IF_SETHIDE(0, 33882441);
    IF_SETHIDE(0, 33882439);
    IF_SETONCLICK(callback(script3846), 33882431);
    if ((int0 != -1)) {
        IF_SETONCLICK(callback(script3846), 33882440);
        IF_SETOBJECT_NONUM(int0, 100, 33882439);
        IF_SETHIDE(0, 33882438);
        IF_SETPOSITION((5 + IF_GETWIDTH(33882438)), IF_GETY(33882437), 0, 0, 33882437);
    } else {
        IF_SETOBJECT(-1, 0, 33882439);
        IF_SETHIDE(1, 33882438);
        IF_SETPOSITION(0, IF_GETY(33882437), 1, 0, 33882437);
    };
    script13979(33882440, -1, 28553, 0, string2, string2);
    IF_SETTEXT(string0, 33882434);
    IF_SETTEXT(string1, 33882437);
    var int2 = script7593(string1, IF_GETWIDTH(33882437), IF_GETFONTMETRICS(33882437), 0);
    int2 = MAX(int2, IF_GETHEIGHT(33882438));
    IF_SETSIZE(0, int2, 1, 0, 33882436);
    IF_SETSIZE(IF_GETWIDTH(33882432), ((int2 + 48) + 37), 0, 0, 33882432);
    return;
}