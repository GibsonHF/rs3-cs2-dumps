//
function script12382(int0: number, int1: number): void {
    varclient_5912 = int0;
    if ((varclient_5209 == true)) {
        IF_SETHIDE(true, comp(1746, 38));  // gwd2_overlay:gwd2_overlay_window
        IF_SETHIDE(false, comp(1746, 1));  // gwd2_overlay:gwd2_overlay_window_slim
    } else {
        IF_SETHIDE(false, comp(1746, 38));  // gwd2_overlay:gwd2_overlay_window
        IF_SETHIDE(true, comp(1746, 1));  // gwd2_overlay:gwd2_overlay_window_slim
    };
    IF_SETGRAPHIC(enum_getvalue(0, 23, 10948 as cs2enum, int0), comp(1746, 72));  // gwd2_overlay:buff_num1
    IF_SETGRAPHIC(enum_getvalue(0, 23, 10949 as cs2enum, int0), comp(1746, 73));  // gwd2_overlay:buff_num2
    var int2 = 20;
    if ((INV_GETOBJ(94 as inv, 17) == 39241 as obj)) {
        int2 = SCALE(20, 100, 150);
    };
    var int3 = (92 + SCALE(92, 400, SCALE(100, int2, int0)));
    var int4 = 36;
    if ((int0 > 0)) {
        if ((varclient_5209 == true)) {
            IF_SETHIDE(false, comp(1746, 32));  // gwd2_overlay:buff_timer_layer_1
            if ((int1 == 1)) {
                varclient_5916 = (CLIENTCLOCK() + (30 * 30));
                IF_SETONTIMER(callback(script12384, CLIENTCLOCK(), varclient_5916), comp(1746, 0));  // gwd2_overlay:main
            };
        } else {
            IF_SETSIZE(int3, int4, 0, 0, comp(1746, 71));  // gwd2_overlay:buff_num_layer
            IF_SETONTIMER(callback(script12383, 0, 30, int3, int4, 16), comp(1746, 71));  // gwd2_overlay:buff_num_layer
            IF_SETHIDE(false, comp(1746, 69));  // gwd2_overlay:buff_timer_layer
            if ((int1 == 1)) {
                varclient_5916 = (CLIENTCLOCK() + (30 * 30));
                IF_SETONTIMER(callback(script12384, CLIENTCLOCK(), varclient_5916), comp(1746, 0));  // gwd2_overlay:main
            };
        };
    } else {
        IF_SETHIDE(true, comp(1746, 69));  // gwd2_overlay:buff_timer_layer
        IF_SETHIDE(true, comp(1746, 32));  // gwd2_overlay:buff_timer_layer_1
    };
    if ((int0 == int2)) {
        IF_SETCOLOUR(16711680, comp(1746, 72));  // gwd2_overlay:buff_num1
        IF_SETCOLOUR(16711680, comp(1746, 73));  // gwd2_overlay:buff_num2
        IF_SETCOLOUR(16711680, comp(1746, 74));  // gwd2_overlay:buff_num3
        IF_SETCOLOUR(16711680, comp(1746, 75));  // gwd2_overlay:buff_percent
        IF_SETTEXT(`<col=FFFFFF>Multiplier: <col=FF0000>${inttostring((100 + (10 * int0)), 10)}%</col>`, comp(1746, 35));  // gwd2_overlay:buff_text_1
    } else {
        IF_SETCOLOUR(16777215, comp(1746, 72));  // gwd2_overlay:buff_num1
        IF_SETCOLOUR(16777215, comp(1746, 73));  // gwd2_overlay:buff_num2
        IF_SETCOLOUR(16777215, comp(1746, 74));  // gwd2_overlay:buff_num3
        IF_SETCOLOUR(16777215, comp(1746, 75));  // gwd2_overlay:buff_percent
        IF_SETTEXT(`<col=FFFFFF>Multiplier: <col=FFFFFF>${inttostring((100 + (10 * int0)), 10)}%</col>`, comp(1746, 35));  // gwd2_overlay:buff_text_1
    };
    return;
}