//
function script9113(int0: number): void {
    if ((CC_FIND(comp(248, 44), int0) == 1)) {  // donation:build_inv_layer
        IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, comp(248, 45));  // donation:highlight
        IF_SETPOSITION((IF_GETX(comp(248, 44) /*donation:build_inv_layer*/) + CC_GETX()), (IF_GETY(comp(248, 44) /*donation:build_inv_layer*/) + CC_GETY()), 0, 0, comp(248, 45) /*donation:highlight*/);
        IF_SETHIDE(false, comp(248, 45));  // donation:highlight
    } else {
        IF_SETHIDE(true, comp(248, 45));  // donation:highlight
    };
    return;
}