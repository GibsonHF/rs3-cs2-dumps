//
function script4080(): void {
    if ((IF_FIND(comp(1060, 0)) == 1)) {  // xmas10_seal_scoring:reset_end1
        CC_SETGRAPHIC(4032 as graphic);
    };
    if ((IF_FIND(comp(1060, 2)) == 1)) {  // xmas10_seal_scoring:reset_end2
        CC_SETGRAPHIC(4035 as graphic);
    };
    if ((IF_FIND(comp(1060, 1)) == 1)) {  // xmas10_seal_scoring:reset_mid
        CC_SETGRAPHIC(4038 as graphic);
    };
    return;
}