//
function script11915(int0: number, int1: number): void {
    if ((IF_GETHIDE(43384903) == 1)) {
        return;
    };
    var int2 = 0;
    if ((CC_FIND(43384902, 8) == 1)) {
        int2 = PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS());
        if (((CC_GETX() + int2) >= (IF_GETX(IF_GETPARENTLAYER(43384955)) + IF_GETX(43384955)))) {
            CC_SETTEXT(inttostring(int0, 10));
        } else {
            CC_SETTEXT(`${inttostring(int0, 10)}/${inttostring(int1, 10)}`);
        };
    };
    return;
}