//
function script14254(): void {
    var int0 = -1;
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    int0 = (int0 + 1);
    while ((int0 <= 2)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    IF_SETMODELLIGHTING(768, 512, 0, 255, 255, 255, 0, -1, -4, 3224 as material, comp(491, 9));  // trh147_overlay:chest_1_model
    IF_SETMODELLIGHTING(768, 512, 0, 255, 255, 255, 0, -1, -4, 3224 as material, comp(491, 13));  // trh147_overlay:chest_2_model
    return;
}