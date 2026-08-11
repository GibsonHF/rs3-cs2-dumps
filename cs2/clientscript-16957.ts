//
function script16957(): void {
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int0 = 0;
    int0 = (int0 + 1);
    while ((int0 <= 14)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    IF_SETONVARTRANSMIT(callback(script16958, 10605, 10605, 10605, 10605, 10605, 10605, 6), comp(1067, 0));  // trh186_overlay:universe
    IF_SETONTIMER(callback(script16963, 0, 69927001), comp(1067, 23));  // trh186_overlay:genie_anim_timer
    IF_SETONTIMER(callback(script16963, 0, 69926963), comp(1067, 23));  // trh186_overlay:genie_anim_timer
    IF_SETOPCURSOR(1, 204, comp(1067, 61));  // trh186_overlay:wish_click_layer_1
    IF_SETOPCURSOR(1, 204, comp(1067, 66));  // trh186_overlay:wish_click_layer_2
    IF_SETOPCURSOR(1, 204, comp(1067, 71));  // trh186_overlay:wish_click_layer_3
    IF_SETOPCURSOR(1, 204, comp(1067, 76));  // trh186_overlay:wish_1_graphic
    IF_SETOPCURSOR(1, 204, comp(1067, 80));  // trh186_overlay:wish_2_graphic
    IF_SETOPCURSOR(1, 204, comp(1067, 81));  // trh186_overlay:wish_3_graphic
    IF_SETOPCURSOR(1, 204, comp(1067, 3));  // trh186_overlay:claim_wish_layer
    IF_SETOPCURSOR(1, 204, comp(1067, 55));  // trh186_overlay:enhance_wish_layer
    return;
}