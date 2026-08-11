//
function script20067(): void {
    IF_SETONRESIZE(callback(script5944), comp(1357, 0));  // returner_retention_floater:container
    if (((varclient_8312 == -1) && (varclient_8313 == -1))) {
        varclient_8312 = ((IF_GETWIDTH(comp(1357, 0) /*returner_retention_floater:container*/) / 2) - (IF_GETWIDTH(comp(1357, 1) /*returner_retention_floater:content_layer*/) / 2));
        varclient_8313 = 20;
    };
    var int0 = varclient_8312;
    var int1 = varclient_8313;
    if ((script6431() == 1)) {
        int0 = (IF_GETX(comp(1477, 60)) + 2);  // toplevel_v2:plugin_build_layer_bottom
        int1 = (IF_GETHEIGHT(comp(1477, 60)) / 2);  // toplevel_v2:plugin_build_layer_bottom
        IF_SETSIZE(22, 22, 1, 1, comp(1357, 7));  // returner_retention_floater:close_button
        IF_SETONDRAG(callback(), comp(1357, 1));  // returner_retention_floater:content_layer
        IF_SETDRAGGABLE(comp(-1, 65535), -1, comp(1357, 1));  // returner_retention_floater:content_layer
    } else {
        IF_SETDRAGGABLE(comp(1357, 0) /*returner_retention_floater:container*/, -1, comp(1357, 1) /*returner_retention_floater:content_layer*/);
    };
    script20070(int0, int1);
    return;
}