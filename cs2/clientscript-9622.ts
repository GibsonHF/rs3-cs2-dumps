//
function script9622(int0: component, int1: component): void {
    if ((IF_GETSCROLLHEIGHT(int0) <= IF_GETHEIGHT(int0))) {
        CC_DELETEALL(int1);
        IF_SETSCROLLPOS(0, 0, int0);
    } else {
        script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    if ((CC_FIND(int1, 1) == 1)) {
        script37(int1, int0, IF_GETSCROLLY(int0), 1);
    };
    return;
}