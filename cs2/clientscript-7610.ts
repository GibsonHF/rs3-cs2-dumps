//
function script7610(string0: string): void {
    CC_DELETEALL(101908487);
    CC_CREATE(101908487, 4, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(26);
    IF_SETTEXT("-", 101908495);
    IF_SETTEXT("Recipe details", 101908496);
    IF_SETHIDE(0, 101908504);
    return;
}