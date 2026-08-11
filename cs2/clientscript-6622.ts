//
function script6622(int0: number, int1: number, int2: number): void {
    var int3 = 541;
    if ((int2 == 2)) {
        int3 = 539;
    };
    var int4 = comp(1323, 45);  // peng_pow_bfish:pieces_blue
    var int5 = comp(1323, 46);  // peng_pow_bfish:piece_highlight_blue
    if ((int0 == 674)) {
        int4 = comp(1323, 6);  // peng_pow_bfish:pieces_green
        int5 = comp(1323, 7);  // peng_pow_bfish:piece_highlight_green
    };
    if (((IF_FIND(int5) == 1) && (CC_FIND[1](int4, int1) == 1))) {
        CC_SETSIZE(25, 25, 0, 0);
        CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
        CC_SETONTIMER(callback(script6623, (CLIENTCLOCK() + 100), 0, int3, int5));
    };
    return;
}