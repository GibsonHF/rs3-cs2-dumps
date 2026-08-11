//
function script6269(int0: number, int1: number): void {
    IF_SETONTIMER(callback(), int0);
    script6979(int1);
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](comp(1555, 10), 1) == 1))) {  // elfcity_meilyr_recipe_shop:highlight_area
        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
        if ((varplayer_4902 != int1)) {
            CC_SETHIDE[1](false);
        } else {
            CC_SETHIDE[1](true);
        };
    };
    return;
}