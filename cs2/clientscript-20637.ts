//
function script20637(int0: number, int1: number, int2: number): number {
    var int3 = script5276(int1, 3);
    var int4 = ((int3 * 176) + ((int3 + 1) * 8));
    if ((CC_FIND(comp(1498, 2), int2) == 1)) {  // marketplace_store:items_holder
        CC_SETSIZE(0, int4, 1, 0);
    };
    return (int0 + int4);
}