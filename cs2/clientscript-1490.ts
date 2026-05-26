//
function script1490(string0: string): void {
    var int0 = 47382543;
    var int1 = 47382540;
    var int2 = PARAHEIGHT(string0, IF_GETWIDTH(int0), IF_GETFONTMETRICS(int0));
    int2 = ((int2 * 17) + 20);
    IF_SETSIZE(170, int2, 1, 0, int1);
    IF_SETTEXT(string0, int0);
    IF_SETHIDE(0, int1);
    printmessage(string0);
    return;
}