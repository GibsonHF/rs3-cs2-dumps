//
function script8956(int0: number): void {
    var string0 = script5840(int0);
    var int1 = 0;
    if ((IF_FIND(comp(1851, 82)) == 1)) {
        int1 = script7593(string0, CC_GETWIDTH(), 26, 0);
        if ((int1 > CC_GETHEIGHT())) {
            CC_SETSIZE(26, CC_GETHEIGHT(), 1, 0);
            CC_SETSCROLLSIZE(0, int1);
            CC_SETSCROLLPOS(0, 0);
            script7791(121307220, 121307218);
        };
        IF_SETSIZE(0, int1, 1, 0, comp(1851, 83));
    };
    IF_SETTEXT(string0, comp(1851, 83));
    IF_SETHIDE(false, comp(1851, 30));
    return;
}