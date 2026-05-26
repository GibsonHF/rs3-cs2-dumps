//
function script10743(string0: string): void {
    CC_DELETEALL(101842958);
    CC_CREATE(101842958, 4, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(26);
    IF_SETTEXT("-", 101842959);
    IF_SETTEXT("Enhancer details", 101842960);
    IF_SETHIDE(0, 101842955);
    return;
}