//
function script19486(string0: string): number {
    IF_SETHIDE(false, comp(1313, 134));  // group_ironman_storage:confirm_withdraw_item_layer
    IF_SETHIDE(true, comp(1313, 143));  // group_ironman_storage:confirm_withdraw_button
    IF_SETHIDE(true, comp(1313, 144));  // group_ironman_storage:cancel_withdraw_button
    IF_SETTEXT("Loading...", comp(1313, 142));  // group_ironman_storage:confirm_withdraw_text
    IF_SETONCLICK(callback(), comp(1313, 123));  // group_ironman_storage:confirm_back_rect
    script8808();
    script5487(1);
    return 0;
}