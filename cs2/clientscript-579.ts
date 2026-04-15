//[clientscript,objdialog_highlight]
function script579(int0: int, int1: obj): void {
    if ((CC_FIND(comp(389, 2), 0) == 1)) {
        CC_SETPOSITION(0, (15 * (int0 - 1)), 0, 0);
        CC_SETSIZE(IF_GETWIDTH(comp(389, 2)), 15, 0, 0);
        CC_SETCOLOUR(0);
        CC_SETTRANS(220);
        CC_SETFILL(1);
    };
    IF_SETOBJECT(int1, -1, comp(389, 9));
    return;
}