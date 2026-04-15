//
function script14386(int0: inv, int1: int, int2: obj, int3: int): void {
    var int4 = OC_WEARPOS(int2);
    if ((int4 == -1)) {
        return;
    };
    var int5 = -1 as inv;
    var int6 = -1 as inv;
    var int7 = -1 as inv;
    [int5, int6, int7] = script15906(varbitplayer_22179);
    if ((int5 == -1 as inv)) {
        return;
    };
    var int8 = script8026(int2);
    if ((script8040(int6, int8) == 1)) {
        return;
    };
    if ((CC_FIND(comp(517, 289), int4) == 1)) {
        script9222(int8, int3);
    };
    return;
}