//
function script16803(string0: string): void {
    if ((IF_HASSUBMODAL(comp(1477, 693), 517) == 0)) {  // toplevel_v2:bank_window
        IF_RESUME_PAUSEBUTTON(33882451);
        IF_SETHIDE(true, comp(517, 330));  // bank:confirm_withdraw_item_layer
        return;
    };
    IF_SETHIDE(false, comp(517, 330));  // bank:confirm_withdraw_item_layer
    IF_SETHIDE(false, comp(517, 338));  // bank:confirm_withdraw_button
    IF_SETHIDE(false, comp(517, 339));  // bank:cancel_withdraw_button
    IF_SETONCLICK(callback(script16804), comp(517, 331));  // bank:confirm_withdraw_back_rect
    script13979(33882450, -1, 28553, 0, "Withdraw", "Withdraw");
    IF_SETTEXT(string0, comp(517, 337));  // bank:confirm_withdraw_text
    return;
}