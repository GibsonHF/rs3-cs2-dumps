//
function script6673(int0: number, int1: number): void {
    if ((int1 < 25)) {
        IF_SETONTIMER(callback(script6673, int0, (int1 + 1)), int0);
        return;
    };
    IF_SETONTIMER(callback(), int0);
    if ((CC_FIND[1](comp(1555, 10), 1) == 1)) {  // elfcity_meilyr_recipe_shop:highlight_area
        CC_SETHIDE[1](true);
    };
    script6979(varplayer_4902);
    return;
}