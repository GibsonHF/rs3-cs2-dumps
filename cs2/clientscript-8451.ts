//
function script8451(int0: number): void {
    if ((int0 == 102170649)) {
        IF_SETSIZE(0, 378, 1, 0, int0);
        IF_SETHIDE(1, 102170641);
        IF_SETSIZE(IF_GETWIDTH(102170634), IF_GETHEIGHT(102170637), 0, 0, 102170637);
        IF_SETSIZE(IF_GETWIDTH(102170631), IF_GETHEIGHT(102170635), 0, 0, 102170635);
        IF_SETONVARTRANSMIT(callback(script8453, int0, 4964, 4972, 4975, 3), int0);
        IF_SETONINVTRANSMIT(callback(script8453, int0, 742, 1), int0);
        IF_SETPOSITION(IF_GETX(102170640), (IF_GETY(102170640) - 20), 0, 0, 102170640);
        IF_SETPOSITION(IF_GETX(102170652), (IF_GETY(102170652) + 5), 0, 0, 102170652);
        IF_SETSIZE(0, 10, 1, 1, 102170629);
    } else {
        IF_SETSIZE(274, 404, 0, 0, 95879198);
        IF_SETHIDE(0, 95879189);
        IF_SETONVARTRANSMIT(callback(script8453, int0, 715, 716, 711, 3), int0);
        IF_SETONINVTRANSMIT(callback(script8453, int0, 94, 1), int0);
    };
    script8452(int0);
    return;
}