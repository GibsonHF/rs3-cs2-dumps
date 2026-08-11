//
function script10954(int0: number): void {
    if ((int0 > (INV_TOTAL(93 as inv, 33968 as obj) / 10))) {
        var int0 = (INV_TOTAL(93 as inv, 33968 as obj) / 10);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(1584, 214));  // trh44_valentines15_shop:text_input_display
    if ((int0 > 0)) {
        IF_SETHIDE(true, comp(1584, 195));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_accept_amount
    } else {
        IF_SETHIDE(false, comp(1584, 195));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_accept_amount
    };
    return;
}