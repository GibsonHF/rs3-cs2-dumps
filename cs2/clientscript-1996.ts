//
function script1996(string0: string): void {
    var int0 = 68157440;
    var int1 = 68157448;
    var int2 = PARAHEIGHT(string0, IF_GETWIDTH(int0), IF_GETFONTMETRICS(int0));
    int2 = ((int2 * 17) + 20);
    IF_SETSIZE(170, int2, 1, 0, int1);
    IF_SETTEXT(string0, int0);
    IF_SETHIDE(0, int1);
    printmessage(string0);
    return;
}