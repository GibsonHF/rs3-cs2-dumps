//
function script2928(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    IF_SETHIDE(true, comp(1477, 55));  // toplevel_v2:mobile_border_blocker
    if ((script6431() == 1)) {
        IF_SETPOSITION(5, 5, 0, 0, comp(1477, 61));  // toplevel_v2:plugin_build_layer_bottom
        IF_SETSIZE(10, 10, 1, 1, comp(1477, 61));  // toplevel_v2:plugin_build_layer_bottom
        IF_SETPOSITION(5, 5, 0, 0, comp(1477, 566));  // toplevel_v2:plugin_content_window
        IF_SETSIZE(10, 10, 1, 1, comp(1477, 566));  // toplevel_v2:plugin_content_window
        IF_SETPOSITION(5, 5, 0, 0, comp(276, 8));  // toplevel_v2_mobile:viewport
        IF_SETSIZE(10, 10, 1, 1, comp(276, 8));  // toplevel_v2_mobile:viewport
        IF_SETPOSITION(5, 5, 0, 0, comp(1477, 698));  // toplevel_v2:activity_progress_bar_window_border
        IF_SETSIZE(10, 10, 1, 1, comp(1477, 698));  // toplevel_v2:activity_progress_bar_window_border
        IF_SETHIDE(false, comp(1477, 55));  // toplevel_v2:mobile_border_blocker
        [int0, int1, int2, int3] = script2956();
        IF_SETSIZE(int0, 0, 0, 1, comp(1477, 56));  // toplevel_v2:mobile_block_left
        IF_SETSIZE(int2, 0, 0, 1, comp(1477, 58));  // toplevel_v2:mobile_block_top
        IF_SETSIZE(0, int1, 1, 0, comp(1477, 59));  // toplevel_v2:mobile_block_bottom
        IF_SETSIZE(0, int3, 1, 0, comp(1477, 60));  // toplevel_v2:game_area
        script9538();
        script15547(int0, int1, int2, int3);
    };
    return;
}