//
function script19483(int0: number, int1: number, string0: string, string1: string, string2: string): void {
    if ((IF_HASSUBMODAL(comp(1477, 693), 1313) == 0)) {  // toplevel_v2:bank_window
        IF_RESUME_PAUSEBUTTON(86048901);
        IF_SETHIDE(true, comp(1313, 122));  // group_ironman_storage:confirm_drop_item_layer
        return;
    };
    IF_SETHIDE(false, comp(1313, 122));  // group_ironman_storage:confirm_drop_item_layer
    IF_SETHIDE(false, comp(1313, 132));  // group_ironman_storage:confirm_drop_button
    IF_SETHIDE(false, comp(1313, 133));  // group_ironman_storage:cancel_drop_button
    IF_SETHIDE(false, comp(1313, 131));  // group_ironman_storage:confirm_drop_graphic
    IF_SETONCLICK(callback(script19484), comp(1313, 123));  // group_ironman_storage:confirm_back_rect
    if ((int0 != -1 as obj)) {
        IF_SETONCLICK(callback(script19484), comp(1313, 132));  // group_ironman_storage:confirm_drop_button
        IF_SETOBJECT_NONUM(int0, 100, comp(1313, 131));  // group_ironman_storage:confirm_drop_graphic
        IF_SETHIDE(false, comp(1313, 130));  // group_ironman_storage:confirm_drop_bg
        IF_SETPOSITION((5 + IF_GETWIDTH(comp(1313, 130) /*group_ironman_storage:confirm_drop_bg*/)), IF_GETY(comp(1313, 129) /*group_ironman_storage:confirm_drop_text*/), 0, 0, comp(1313, 129) /*group_ironman_storage:confirm_drop_text*/);
    } else {
        IF_SETOBJECT(-1 as obj, 0, comp(1313, 131));  // group_ironman_storage:confirm_drop_graphic
        IF_SETHIDE(true, comp(1313, 130));  // group_ironman_storage:confirm_drop_bg
        IF_SETPOSITION(0, IF_GETY(comp(1313, 129)), 1, 0, comp(1313, 129));  // group_ironman_storage:confirm_drop_text
    };
    script13979(86048900, -1, 28553, 0, string2, string2);
    IF_SETTEXT(string0, comp(1313, 126));  // group_ironman_storage:confirm_panel_title
    IF_SETTEXT(string1, comp(1313, 129));  // group_ironman_storage:confirm_drop_text
    var int2 = script7593(string1, IF_GETWIDTH(comp(1313, 129)), IF_GETFONTMETRICS(comp(1313, 129)), 0);  // group_ironman_storage:confirm_drop_text
    int2 = MAX(int2, IF_GETHEIGHT(comp(1313, 130)));  // group_ironman_storage:confirm_drop_bg
    IF_SETSIZE(0, int2, 1, 0, comp(1313, 128));  // group_ironman_storage:confirm_drop_info
    IF_SETSIZE(IF_GETWIDTH(comp(1313, 124)), ((int2 + 48) + 37), 0, 0, comp(1313, 124));  // group_ironman_storage:confirm_panel_container
    return;
}