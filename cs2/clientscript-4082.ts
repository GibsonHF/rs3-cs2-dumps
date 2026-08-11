//
function script4082(): void {
    if ((IF_FIND(comp(1060, 0)) == 1)) {  // xmas10_seal_scoring:reset_end1
        CC_SETGRAPHIC(4033 as graphic);
    };
    if ((IF_FIND(comp(1060, 2)) == 1)) {  // xmas10_seal_scoring:reset_end2
        CC_SETGRAPHIC(4036 as graphic);
    };
    if ((IF_FIND(comp(1060, 1)) == 1)) {  // xmas10_seal_scoring:reset_mid
        CC_SETGRAPHIC(4039 as graphic);
    };
    return;
}