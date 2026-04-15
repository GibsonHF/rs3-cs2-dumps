//
function script11089(int0: int): void {
    var int1 = 0;
    int1 = SCALE(IF_GETHEIGHT(comp(1593, 9)), 40, int0);
    IF_SETSIZE(IF_GETWIDTH(comp(1593, 9)), int1, 0, 0, comp(1593, 10));
    int1 = SCALE(IF_GETHEIGHT(comp(1593, 11)), 40, MAX((40 - int0), 0));
    IF_SETSIZE(IF_GETWIDTH(comp(1593, 11)), int1, 0, 0, comp(1593, 12));
    return;
}