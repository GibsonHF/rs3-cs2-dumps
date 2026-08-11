//
function script16047(int0: number, int1: number, int2: number): void {
    script13998(13369362, 13369364, 41013, 0, (int1 * (40 + 1)), IF_GETWIDTH(comp(204, 17)), 40, int1, 0, "", script9670(int1, int2));  // rsraffle:button_layer_scroll
    script13998(13369362, 13369364, 41018, 0, (int1 * (40 + 1)), IF_GETWIDTH(comp(204, 17)), 40, int1, 0, "", script9670(int1, int2));  // rsraffle:button_layer_scroll
    script13998(13369362, 13369364, 41023, 0, (int1 * (40 + 1)), IF_GETWIDTH(comp(204, 17)), 40, int1, 0, "", script9670(int1, int2));  // rsraffle:button_layer_scroll
    if ((CC_FIND(comp(204, 20), int1) == 1)) {  // rsraffle:button_layer_click
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script978, int0, int1));
    };
    return;
}