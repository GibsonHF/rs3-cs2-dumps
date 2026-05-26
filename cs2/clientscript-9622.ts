//
function script9622(int0: number, int1: number): void {
    if ((IF_GETSCROLLHEIGHT(int0) <= IF_GETHEIGHT(int0))) {
        CC_DELETEALL(int1);
        IF_SETSCROLLPOS(0, 0, int0);
    } else {
        script31(int1, int0, 792, 789, 790, 791, 773, 788);
    };
    if ((CC_FIND(int1, 1) == 1)) {
        script37(int1, int0, IF_GETSCROLLY(int0), 1);
    };
    return;
}