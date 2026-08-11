//
function script367(int0: number): void {
    if ((int0 == true)) {
        varclient_3693 = 1;
    } else {
        varclient_3693 = 0;
    };
    if ((int0 == true)) {
        if ((varplayer_12314 > 0)) {
            varbitplayer_58381 = script42(IF_GETHIDE(struct_getparam(37398, 3503)));
        };
        varclient_41 = -1;
        script8869();
        if ((varbitplayer_38842 == 1)) {
            script13893(1);
        } else if ((varbitplayer_27169 == 1)) {
            script9944();
        };
    } else {
        if ((varplayer_12314 > 0)) {
            IF_SETHIDE(script734(varbitplayer_58381), struct_getparam(37398, 3503));
        };
        varclient_41 = 0;
        script2464();
        script2466();
    };
    IF_SETHIDE(int0, comp(1477, 815));  // toplevel_v2:fullscreen_pop_ups
    IF_SETHIDE(int0, comp(1477, 878));  // toplevel_v2:low_fps_layer
    if ((int0 == true)) {
        CLIENTOPTION_SET(6, 0);
    } else {
        CLIENTOPTION_SET(6, script42(varclient_987));
        varclient_41 = 0;
    };
    script8702(-1, 9);
    script20344();
    return;
}