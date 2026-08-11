//
function script4081(): void {
    if ((IF_FIND(comp(1060, 0)) == 1)) {  // xmas10_seal_scoring:reset_end1
        CC_SETGRAPHIC(4031 as graphic);
    };
    if ((IF_FIND(comp(1060, 2)) == 1)) {  // xmas10_seal_scoring:reset_end2
        CC_SETGRAPHIC(4034 as graphic);
    };
    if ((IF_FIND(comp(1060, 1)) == 1)) {  // xmas10_seal_scoring:reset_mid
        CC_SETGRAPHIC(4037 as graphic);
    };
    return;
}