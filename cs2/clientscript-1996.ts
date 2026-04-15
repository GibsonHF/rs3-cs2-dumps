//
function script1996(string0: string): void {
    var int0 = comp(1040, 0);
    var int1 = comp(1040, 8);
    var int2 = PARAHEIGHT(string0, IF_GETWIDTH(int0), IF_GETFONTMETRICS(int0));
    int2 = ((int2 * 17) + 20);
    IF_SETSIZE(170, int2, 1, 0, int1);
    IF_SETTEXT(string0, int0);
    IF_SETHIDE(false, int1);
    printmessage(string0);
    return;
}