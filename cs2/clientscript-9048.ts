//
function script9048(int0: number): void {
    if ((int0 == false)) {
        script7998();
    } else {
        script7997();
    };
    script1306(int0, 0);
    IF_SETHIDE(int0, comp(1477, 565));  // toplevel_v2:gameplay_huds
    IF_SETHIDE(int0, comp(1477, 784));  // toplevel_v2:context_wrapper
    IF_SETHIDE(int0, comp(1477, 815));  // toplevel_v2:fullscreen_pop_ups
    IF_SETHIDE(int0, comp(1477, 882));  // toplevel_v2:optext_layer
    IF_SETHIDE(int0, comp(1477, 909));  // toplevel_v2:tooltips_layer
    IF_SETHIDE(int0, comp(1477, 804));  // toplevel_v2:floater_layer
    IF_SETHIDE(int0, comp(1477, 878));  // toplevel_v2:low_fps_layer
    IF_SETHIDE(int0, comp(1477, 605));  // toplevel_v2:maindebug
    return;
}