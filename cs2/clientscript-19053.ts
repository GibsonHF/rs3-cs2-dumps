//
function script19053(int0: number, int1: number, int2: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    if ((varbitplayer_52330 == 0)) {
        IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
        IF_SETMODEL(126627 as model, int2);
        IF_SETMODELANIM(34955 as seq, int2);
        IF_SETONTIMER(callback(), int2);
        script19054(int1);
        return;
    };
    IF_SETMODEL(134024 as model, int2);
    switch (int1) {
        case 1: {
            if ((varbitplayer_55835 == 1)) {
                IF_SETMODELANIM(22645 as seq, int2);
                IF_SETONTIMER(callback(), int2);
                IF_SETHIDE(true, comp(1014, 62));  // trh183_overlay:chest_1_prize_layer
                IF_SETHIDE(true, comp(1014, 66));  // trh183_overlay:chest_1_multiplier_icon
                IF_SETHIDE(true, comp(1014, 65));  // trh183_overlay:chest_1_prize_info
                IF_SETGRAPHIC(20315 as graphic, comp(1014, 64));  // trh183_overlay:chest_1_parchment
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                IF_SETGRAPHIC(20218 as graphic, comp(1014, 64));  // trh183_overlay:chest_1_parchment
            };
            break;
        }
        case 2: {
            if ((varbitplayer_55836 == 1)) {
                IF_SETMODELANIM(22645 as seq, int2);
                IF_SETONTIMER(callback(), int2);
                IF_SETHIDE(true, comp(1014, 68));  // trh183_overlay:chest_2_prize_layer
                IF_SETHIDE(true, comp(1014, 72));  // trh183_overlay:chest_2_multiplier_icon
                IF_SETHIDE(true, comp(1014, 71));  // trh183_overlay:chest_2_prize_info
                IF_SETGRAPHIC(20315 as graphic, comp(1014, 70));  // trh183_overlay:chest_2_parchment
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                IF_SETGRAPHIC(20218 as graphic, comp(1014, 70));  // trh183_overlay:chest_2_parchment
            };
            break;
        }
        case 3: {
            if ((varbitplayer_55837 == 1)) {
                IF_SETMODELANIM(22645 as seq, int2);
                IF_SETONTIMER(callback(), int2);
                IF_SETHIDE(true, comp(1014, 74));  // trh183_overlay:chest_3_prize_layer
                IF_SETHIDE(true, comp(1014, 78));  // trh183_overlay:chest_3_multiplier_icon
                IF_SETHIDE(true, comp(1014, 77));  // trh183_overlay:chest_3_prize_info
                IF_SETGRAPHIC(20315 as graphic, comp(1014, 76));  // trh183_overlay:chest_3_parchment
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                IF_SETGRAPHIC(20218 as graphic, comp(1014, 76));  // trh183_overlay:chest_3_parchment
            };
            break;
        }
    };
    IF_SETONTIMER(callback(), int2);
    return;
}