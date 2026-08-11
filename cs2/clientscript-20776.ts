//
function script20776(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONCLICK(callback(script20780, -2147483645), comp(1477, 30));  // toplevel_v2:gameview_window_content
        stack(callback(script20781, -2147483645));
        stack(96796702);
        IF_SETONRELEASE();
        IF_SETONSCROLLWHEEL(callback(script20785, -2147483645, -2147483646), comp(1477, 30));  // toplevel_v2:gameview_window_content
        script8841(104, 1);
    } else {
        IF_SETONCLICK(callback(), comp(1477, 30));  // toplevel_v2:gameview_window_content
        stack(callback());
        stack(96796702);
        IF_SETONRELEASE();
        IF_SETONSCROLLWHEEL(callback(), comp(1477, 30));  // toplevel_v2:gameview_window_content
        varplayer_12920 = -1 as coordgrid;
    };
    return;
}