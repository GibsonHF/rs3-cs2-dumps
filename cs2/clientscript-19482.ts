//
function script19482(int0: number, int1: number, string0: string, string1: string, string2: string): number {
    IF_SETHIDE(false, comp(1313, 122));  // group_ironman_storage:confirm_drop_item_layer
    IF_SETHIDE(true, comp(1313, 132));  // group_ironman_storage:confirm_drop_button
    IF_SETHIDE(true, comp(1313, 133));  // group_ironman_storage:cancel_drop_button
    IF_SETHIDE(true, comp(1313, 131));  // group_ironman_storage:confirm_drop_graphic
    IF_SETHIDE(true, comp(1313, 130));  // group_ironman_storage:confirm_drop_bg
    IF_SETTEXT("Confirmation Required", comp(1313, 126));  // group_ironman_storage:confirm_panel_title
    IF_SETTEXT("Loading...", comp(1313, 129));  // group_ironman_storage:confirm_drop_text
    IF_SETONCLICK(callback(), comp(1313, 123));  // group_ironman_storage:confirm_back_rect
    script8808();
    script5487(1);
    return 0;
}