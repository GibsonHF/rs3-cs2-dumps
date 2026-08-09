//
function script8451(int0: number): void {
    if ((int0 == comp(1559, 25))) {
        IF_SETSIZE(0, 378, 1, 0, int0);
        IF_SETHIDE(true, comp(1559, 17));
        IF_SETSIZE(IF_GETWIDTH(comp(1559, 10)), IF_GETHEIGHT(comp(1559, 13)), 0, 0, comp(1559, 13));
        IF_SETSIZE(IF_GETWIDTH(comp(1559, 7)), IF_GETHEIGHT(comp(1559, 11)), 0, 0, comp(1559, 11));
        IF_SETONVARTRANSMIT(callback(script8453, int0, 4964, 4972, 4975, 3), int0);
        IF_SETONINVTRANSMIT(callback(script8453, int0, 742, 1), int0);
        IF_SETPOSITION(IF_GETX(comp(1559, 16)), (IF_GETY(comp(1559, 16)) - 20), 0, 0, comp(1559, 16));
        IF_SETPOSITION(IF_GETX(comp(1559, 28)), (IF_GETY(comp(1559, 28)) + 5), 0, 0, comp(1559, 28));
        IF_SETSIZE(0, 10, 1, 1, comp(1559, 5));
    } else {
        IF_SETSIZE(274, 404, 0, 0, comp(1463, 30));
        IF_SETHIDE(false, comp(1463, 21));
        IF_SETONVARTRANSMIT(callback(script8453, int0, 715, 716, 711, 3), int0);
        IF_SETONINVTRANSMIT(callback(script8453, int0, 94, 1), int0);
    };
    script8452(int0);
    return;
}