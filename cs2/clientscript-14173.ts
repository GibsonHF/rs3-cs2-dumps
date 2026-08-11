//
function script14173(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(1477, 52));  // toplevel_v2:gameview_blocker
    IF_SENDTOFRONT(comp(1477, 52));  // toplevel_v2:gameview_blocker
    if ((int0 != comp(-1, 65535))) {
        IF_SENDTOFRONT(int0);
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SENDTOFRONT(int1);
    };
    IF_SENDTOFRONT(comp(1477, 745));  // toplevel_v2:npc_chat_holder
    IF_SENDTOFRONT(comp(1477, 784));  // toplevel_v2:context_wrapper
    IF_SENDTOFRONT(comp(1477, 799));  // toplevel_v2:spotlight_layer
    IF_SENDTOFRONT(comp(1477, 815));  // toplevel_v2:fullscreen_pop_ups
    IF_SENDTOFRONT(comp(1477, 825));  // toplevel_v2:if_highlights
    IF_SENDTOFRONT(comp(1477, 801));  // toplevel_v2:tutsys_box_window
    IF_SENDTOFRONT(comp(1477, 878));  // toplevel_v2:low_fps_layer
    script14987(0);
    return;
}