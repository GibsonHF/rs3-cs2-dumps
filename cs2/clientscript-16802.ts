//
function script16802(string0: string): number {
    IF_SETHIDE(false, comp(517, 330));  // bank:confirm_withdraw_item_layer
    IF_SETHIDE(true, comp(517, 338));  // bank:confirm_withdraw_button
    IF_SETHIDE(true, comp(517, 339));  // bank:cancel_withdraw_button
    IF_SETTEXT("Loading...", comp(517, 337));  // bank:confirm_withdraw_text
    IF_SETONCLICK(callback(), comp(517, 319));  // bank:confirm_back_rect
    script8808();
    script5487(1);
    return 0;
}