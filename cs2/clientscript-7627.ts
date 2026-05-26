//
function script7627(int0: number, int1: number): void {
    var int0 = (int0 - script351(int0, int1));
    var int2 = ((int0 * (32 + 4)) - 4);
    if ((int2 > IF_GETHEIGHT(46465028))) {
        IF_SETSIZE((IF_GETWIDTH(46465028) - 18), IF_GETHEIGHT(55705600), 0, 0, 55705600);
        IF_SETSCROLLSIZE(0, int2, 55705600);
        IF_SETSCROLLPOS(0, 0, 55705600);
        script7791(55705603, 55705600);
    } else {
        IF_SETSIZE(0, 0, 1, 1, 55705600);
        IF_SETSCROLLPOS(0, 0, 55705600);
        IF_SETSCROLLSIZE(0, 0, 55705600);
        CC_DELETEALL(55705603);
    };
    return;
}