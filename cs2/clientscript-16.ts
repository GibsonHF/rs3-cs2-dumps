//
function script16(): void {
    if ((script6431() == 0)) {
        IF_SETHIDE(true, comp(1270, 14));  // fremsaga_bilrach_mind:cursor_layer
        IF_SETONMOUSEREPEAT(callback(script6131, -2147483647, -2147483646), comp(1270, 17));  // fremsaga_bilrach_mind:mouse_track_layer
    } else {
        IF_SETOP(callback(script1), comp(1270, 16));  // fremsaga_bilrach_mind:mind_bg
        IF_SETONCLICK(callback(script6131, -2147483647, -2147483646), comp(1270, 17));  // fremsaga_bilrach_mind:mouse_track_layer
        IF_SETHIDE(false, comp(1270, 14));  // fremsaga_bilrach_mind:cursor_layer
        varclient_1889 = (IF_GETWIDTH(comp(1270, 2)) / 2);  // fremsaga_bilrach_mind:wrapper_layer
        varclient_1890 = (IF_GETHEIGHT(comp(1270, 2)) / 2);  // fremsaga_bilrach_mind:wrapper_layer
        IF_SETPOSITION((varclient_1889 - (IF_GETWIDTH(comp(1270, 14)) / 2)), (varclient_1890 - (IF_GETHEIGHT(comp(1270, 14)) / 2)), 0, 0, comp(1270, 14));  // fremsaga_bilrach_mind:cursor_layer
        CC_CREATE(comp(1270, 14), 3, 0);  // fremsaga_bilrach_mind:cursor_layer
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETONOP(callback(script119));
        CC_SETOP(6, "Place beacon");
        CC_SETFILL(1);
        CC_SETTRANS(255);
        CC_SETNOCLICKTHROUGH(true);
    };
    return;
}