//
function script15412(): void {
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int0 = -1;
    int0 = (int0 + 1);
    while ((int0 < 4)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    var int1 = 0;
    int1 = (int1 + 1);
    while ((int1 <= 10)) {
        script15416(int1);
    };
    IF_SETSIZE(200, 120, 0, 0, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
    IF_SETPOSITION(100, 60, 0, 0, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
    IF_SETOPCURSOR(1, 46, comp(760, 43));  // trh193_overlay:currency_buy_button
    script15413();
    script15414();
    return;
}