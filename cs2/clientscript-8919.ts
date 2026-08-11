//
function script8919(int0: number, int1: number, string0: string, string1: string, string2: string): number {
    IF_SETHIDE(false, comp(517, 318));  // bank:confirm_drop_item_layer
    IF_SETHIDE(true, comp(517, 328));  // bank:confirm_drop_button
    IF_SETHIDE(true, comp(517, 329));  // bank:cancel_drop_button
    IF_SETHIDE(true, comp(517, 327));  // bank:confirm_drop_graphic
    IF_SETHIDE(true, comp(517, 326));  // bank:confirm_drop_bg
    IF_SETTEXT("Confirmation Required", comp(517, 322));  // bank:confirm_panel_title
    IF_SETTEXT("Loading...", comp(517, 325));  // bank:confirm_drop_text
    IF_SETONCLICK(callback(), comp(517, 319));  // bank:confirm_back_rect
    script8808();
    script5487(1);
    return 0;
}