//
function script14173(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(1477, 53));  // toplevel_v2:gameview_blocker
    IF_SENDTOFRONT(comp(1477, 53));  // toplevel_v2:gameview_blocker
    if ((int0 != comp(-1, 65535))) {
        IF_SENDTOFRONT(int0);
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SENDTOFRONT(int1);
    };
    IF_SENDTOFRONT(comp(1477, 746));  // toplevel_v2:modal_window_content_2
    IF_SENDTOFRONT(comp(1477, 785));  // toplevel_v2:layout_guide_3_fill
    IF_SENDTOFRONT(comp(1477, 800));  // toplevel_v2:context_menu_content_layer
    IF_SENDTOFRONT(comp(1477, 816));  // toplevel_v2:floater_layer
    IF_SENDTOFRONT(comp(1477, 826));  // toplevel_v2:combat_targeting_layer
    IF_SENDTOFRONT(comp(1477, 802));  // toplevel_v2:yak_track_background
    IF_SENDTOFRONT(comp(1477, 879));  // toplevel_v2:flash_yellow_10
    script14987(0);
    return;
}