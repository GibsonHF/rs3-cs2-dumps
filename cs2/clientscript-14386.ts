//
function script14386(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = OC_WEARPOS(int2);
    if ((int4 == -1)) {
        return;
    };
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    [int5, int6, int7] = script15906(varbitplayer_22179);
    if ((int5 == -1)) {
        return;
    };
    var int8 = script8026(int2);
    if ((script8040(int6, int8) == 1)) {
        return;
    };
    if ((CC_FIND(comp(517, 289), int4) == 1)) {  // bank:preset_worn_item_layer
        script9222(int8, int3);
    };
    return;
}