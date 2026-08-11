//
function script1306(int0: number, int1: number): void {
    if ((int0 == true)) {
        varclient_3693 = 1;
        varclient_41 = -1;
        script8869();
        if ((varbitplayer_38842 == 1)) {
            script13893(1);
        } else if ((varbitplayer_27169 == 1)) {
            script9944();
        };
        CLIENTOPTION_SET(6, 0);
    } else {
        varclient_3693 = 0;
        varclient_41 = 0;
        script2464();
        script2466();
        CLIENTOPTION_SET(6, script42(varclient_987));
    };
    IF_SETHIDE(int0, comp(1477, 882));  // toplevel_v2:optext_layer
    IF_SETHIDE(int0, comp(1477, 815));  // toplevel_v2:fullscreen_pop_ups
    IF_SETHIDE(int0, comp(1477, 878));  // toplevel_v2:low_fps_layer
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(comp(1477, 39)) == 1)) {  // toplevel_v2:camera_controls
        CC_SETNOCLICKTHROUGH(int0);
    };
    if ((int0 == true)) {
        if ((int1 == 1)) {
            IF_SETHIDE(false, comp(1477, 47));  // toplevel_v2:cutscene_skip_info
            if ((varclient_4614 == 1)) {
                IF_SETHIDE(true, comp(1477, 48));  // toplevel_v2:cutscene_skip_icon
                IF_SETHIDE(true, comp(1477, 49));  // toplevel_v2:cutscene_skip_text
            } else if ((script6431() == 1)) {
                IF_SETHIDE(true, comp(1477, 48));  // toplevel_v2:cutscene_skip_icon
                IF_SETHIDE(false, comp(1477, 49));  // toplevel_v2:cutscene_skip_text
                IF_SETTEXT("Tap here to skip cutscene", comp(1477, 49));  // toplevel_v2:cutscene_skip_text
                [int2, int2, int3, int4] = script2956();
                IF_SETPOSITION(int3, int4, 2, 2, comp(1477, 47));  // toplevel_v2:cutscene_skip_info
            } else {
                IF_SETHIDE(false, comp(1477, 48));  // toplevel_v2:cutscene_skip_icon
                IF_SETHIDE(false, comp(1477, 49));  // toplevel_v2:cutscene_skip_text
                IF_SETTEXT("Skip Cutscene", comp(1477, 49));  // toplevel_v2:cutscene_skip_text
            };
            script8841(33, 1);
        } else {
            IF_SETHIDE(true, comp(1477, 47));  // toplevel_v2:cutscene_skip_info
            script8841(33, 0);
        };
    } else {
        IF_SETHIDE(true, comp(1477, 47));  // toplevel_v2:cutscene_skip_info
        script8841(33, 0);
    };
    script8702(-1, 9);
    return;
}