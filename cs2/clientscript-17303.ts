//
function script17303(): void {
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int0 = 0;
    int0 = (int0 + 1);
    while ((int0 <= 7)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    script17311();
    IF_SETOPCURSOR(1, 211, comp(1152, 7));  // trh192_overlay:fire_btn_click_layer
    if ((varbitplayer_52883 == 0)) {
        script17289();
        varbitplayer_52883 = 1;
    };
    script17320();
    script17327();
    script17305();
    return;
}