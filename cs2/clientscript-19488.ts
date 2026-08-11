//
function script19488(string0: string, string1: string, string2: string, string3: string): void {
    if ((IF_HASSUBMODAL(comp(1477, 693), 1313) == 0)) {  // toplevel_v2:bank_window
        IF_RESUME_PAUSEBUTTON(86048912);
        IF_SETHIDE(true, comp(1313, 134));  // group_ironman_storage:confirm_withdraw_item_layer
        return;
    };
    IF_SETHIDE(false, comp(1313, 134));  // group_ironman_storage:confirm_withdraw_item_layer
    IF_SETHIDE(false, comp(1313, 143));  // group_ironman_storage:confirm_withdraw_button
    IF_SETHIDE(false, comp(1313, 144));  // group_ironman_storage:cancel_withdraw_button
    IF_SETONCLICK(callback(script19489), comp(1313, 136));  // group_ironman_storage:confirm_withdraw_back_rect
    IF_SETTEXT(string0, comp(1313, 139));  // group_ironman_storage:confirm_withdraw_panel_title
    IF_SETTEXT(string1, comp(1313, 142));  // group_ironman_storage:confirm_withdraw_text
    script13979(86048911, -1, 28553, 0, string2, string2);
    script13979(86048912, -1, 28555, 0, string3, string3);
    return;
}