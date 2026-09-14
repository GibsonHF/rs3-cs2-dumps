//
function script14173(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(1477, 53));  // toplevel_v2:com_53
    IF_SENDTOFRONT(comp(1477, 53));  // toplevel_v2:com_53
    if ((int0 != comp(-1, 65535))) {
        IF_SENDTOFRONT(int0);
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SENDTOFRONT(int1);
    };
    IF_SENDTOFRONT(comp(1477, 746));  // toplevel_v2:mes_window_v2
    IF_SENDTOFRONT(comp(1477, 785));  // toplevel_v2:context_sub_menu_layer
    IF_SENDTOFRONT(comp(1477, 800));  // toplevel_v2:worldmap_ui_layer
    IF_SENDTOFRONT(comp(1477, 816));  // toplevel_v2:fixed_overlay_windows
    IF_SENDTOFRONT(comp(1477, 826));  // toplevel_v2:if_highlight_0
    IF_SENDTOFRONT(comp(1477, 802));  // toplevel_v2:tutsys_box_window2
    IF_SENDTOFRONT(comp(1477, 879));  // toplevel_v2:confirm_save_popup_layer
    script14987(0);
    return;
}