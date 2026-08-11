//
function script1646(): void {
    IF_SETENABLED(false, comp(1253, 276));  // wheel_of_fortune:reward_claim_auto_button
    IF_SETENABLED(false, comp(1253, 278));  // wheel_of_fortune:reward_claim_bank_button
    IF_SETENABLED(false, comp(1253, 277));  // wheel_of_fortune:reward_claim_inv_button
    IF_SETENABLED(false, comp(1253, 282));  // wheel_of_fortune:reward_convert_button
    IF_SETHIDE(false, comp(1253, 34));  // wheel_of_fortune:wheel_spin_button_disabled_layer_1
    IF_SETHIDE(false, comp(1253, 24));  // wheel_of_fortune:wheel_spin_button_disabled_layer_2
    IF_SETHIDE(false, comp(1253, 29));  // wheel_of_fortune:wheel_spin_button_disabled_layer_3
    IF_SETHIDE(false, comp(1253, 19));  // wheel_of_fortune:wheel_spin_button_disabled_layer_4
    IF_SETHIDE(false, comp(1253, 14));  // wheel_of_fortune:wheel_spin_button_disabled_layer_5
    return;
}