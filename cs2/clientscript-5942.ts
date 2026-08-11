//
function script5942(): void {
    IF_SETONRESIZE(callback(script5944), comp(1252, 0));  // wheel_of_fortune_button:container
    var int0 = varclient_1787;
    var int1 = varclient_1788;
    if ((script6431() == 1)) {
        int0 = (IF_GETX(comp(1477, 60)) + 2);  // toplevel_v2:plugin_build_layer_bottom
        int1 = (IF_GETHEIGHT(comp(1477, 60)) / 2);  // toplevel_v2:plugin_build_layer_bottom
        IF_SETSIZE(52, 52, 0, 0, comp(1252, 19));  // wheel_of_fortune_button:wof_tick
        IF_SETSIZE(22, 22, 1, 1, comp(1252, 21));  // wheel_of_fortune_button:wof_close_button
        IF_SETPOSITION(0, 0, 2, 0, comp(1252, 19));  // wheel_of_fortune_button:wof_tick
        IF_SETONDRAG(callback(), comp(1252, 1));  // wheel_of_fortune_button:content_layer
        IF_SETDRAGGABLE(comp(-1, 65535), -1, comp(1252, 1));  // wheel_of_fortune_button:content_layer
    } else {
        IF_SETDRAGGABLE(comp(1252, 0) /*wheel_of_fortune_button:container*/, -1, comp(1252, 1) /*wheel_of_fortune_button:content_layer*/);
    };
    script5945(int0, int1);
    IF_SETONTIMER(callback(script10534, -2147483645, 5), comp(1252, 10));  // wheel_of_fortune_button:wof_transparency_gfx
    IF_SETONVARTRANSMIT(callback(script3564, 1448, 1448, 1448, 3), comp(1252, 3));  // wheel_of_fortune_button:wof_keys_left_text
    return;
}