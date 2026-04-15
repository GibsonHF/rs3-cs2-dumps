//
function script11915(int0: int, int1: int): void {
    if ((IF_GETHIDE(comp(662, 71)) == true)) {
        return;
    };
    var int2 = 0;
    if ((CC_FIND(comp(662, 70), 8) == 1)) {
        int2 = PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS());
        if (((CC_GETX() + int2) >= (IF_GETX(IF_GETPARENTLAYER(comp(662, 123))) + IF_GETX(comp(662, 123))))) {
            CC_SETTEXT(inttostring(int0, 10));
        } else {
            CC_SETTEXT(`${inttostring(int0, 10)}/${inttostring(int1, 10)}`);
        };
    };
    return;
}