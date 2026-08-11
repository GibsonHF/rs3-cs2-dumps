//
function script15064(): void {
    IF_OPENSUBCLIENT(comp(276, 15), 280);  // toplevel_v2_mobile:device_status_layer
    IF_SETSIZE(IF_GETWIDTH(comp(280, 0) /*device_status_icons:base*/), IF_GETHEIGHT(comp(280, 0) /*device_status_icons:base*/), 0, 0, comp(276, 15) /*toplevel_v2_mobile:device_status_layer*/);
    script15066();
    IF_SETONTIMER(callback(script10531), comp(280, 1));  // device_status_icons:graphics_and_timer
    return;
}