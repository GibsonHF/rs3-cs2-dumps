//
function script16122(int0: number, int1: number, int2: number): void {
    if ((CC_FINDBYCATEGORY(comp(869, 3), int0, 3) == 1)) {  // pof_advertisement_noticeboard:grid
        script16108(int1, int2, 0, script7802(int1), 0, 0, 0, 3250);
        if ((int1 == 18519)) {
            CC_SETMODELLIGHTING(script16107(), -1 as material);
        };
    };
    return;
}