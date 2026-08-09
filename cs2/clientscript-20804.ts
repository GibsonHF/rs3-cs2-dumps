//
function script20804(int0: number, int1: number): void {
    if ((STRING_LENGTH(varclient_8426) >= 2)) {
        return;
    };
    if ((CC_FINDBYCATEGORY(int0, 2, 0) == 1)) {
        if ((int1 > 0)) {
            CC_SETSCROLLPOS(((CC_GETSCROLLY(0) + 20) + 4));
        } else {
            CC_SETSCROLLPOS(((CC_GETSCROLLY(0) - 20) - 4));
        };
    };
    return;
}