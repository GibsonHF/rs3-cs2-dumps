//
function script3844(int0: number, int1: number, string0: string, string1: string, string2: string): void {
    if ((IF_HASSUBMODAL(comp(1477, 693), 517) == 0)) {  // toplevel_v2:bank_window
        IF_RESUME_PAUSEBUTTON(33882441);
        IF_SETHIDE(true, comp(517, 318));  // bank:confirm_drop_item_layer
        return;
    };
    IF_SETHIDE(false, comp(517, 318));  // bank:confirm_drop_item_layer
    IF_SETHIDE(false, comp(517, 328));  // bank:confirm_drop_button
    IF_SETHIDE(false, comp(517, 329));  // bank:cancel_drop_button
    IF_SETHIDE(false, comp(517, 327));  // bank:confirm_drop_graphic
    IF_SETONCLICK(callback(script3846), comp(517, 319));  // bank:confirm_back_rect
    if ((int0 != -1 as obj)) {
        IF_SETONCLICK(callback(script3846), comp(517, 328));  // bank:confirm_drop_button
        IF_SETOBJECT_NONUM(int0, 100, comp(517, 327));  // bank:confirm_drop_graphic
        IF_SETHIDE(false, comp(517, 326));  // bank:confirm_drop_bg
        IF_SETPOSITION((5 + IF_GETWIDTH(comp(517, 326) /*bank:confirm_drop_bg*/)), IF_GETY(comp(517, 325) /*bank:confirm_drop_text*/), 0, 0, comp(517, 325) /*bank:confirm_drop_text*/);
    } else {
        IF_SETOBJECT(-1 as obj, 0, comp(517, 327));  // bank:confirm_drop_graphic
        IF_SETHIDE(true, comp(517, 326));  // bank:confirm_drop_bg
        IF_SETPOSITION(0, IF_GETY(comp(517, 325)), 1, 0, comp(517, 325));  // bank:confirm_drop_text
    };
    script13979(33882440, -1, 28553, 0, string2, string2);
    IF_SETTEXT(string0, comp(517, 322));  // bank:confirm_panel_title
    IF_SETTEXT(string1, comp(517, 325));  // bank:confirm_drop_text
    var int2 = script7593(string1, IF_GETWIDTH(comp(517, 325)), IF_GETFONTMETRICS(comp(517, 325)), 0);  // bank:confirm_drop_text
    int2 = MAX(int2, IF_GETHEIGHT(comp(517, 326)));  // bank:confirm_drop_bg
    IF_SETSIZE(0, int2, 1, 0, comp(517, 324));  // bank:confirm_drop_info
    IF_SETSIZE(IF_GETWIDTH(comp(517, 320)), ((int2 + 48) + 37), 0, 0, comp(517, 320));  // bank:confirm_panel_container
    return;
}