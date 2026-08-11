//
function script18776(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = (CLIENTCLOCK() - int1);
    if ((int3 <= 30)) {
        int2 = MAX(0, (255 - ((255 / (30 / 6)) * int3)));
        int2 = MIN(IF_GETTRANS(comp(764, 19)), int2);  // combatv2_channel_bar:bar_right_end_indicator_glow_graphic
    } else {
        int2 = MIN(255, ((255 / (30 / 5)) * (int3 - 30)));
        int2 = MAX(IF_GETTRANS(comp(764, 19)), int2);  // combatv2_channel_bar:bar_right_end_indicator_glow_graphic
    };
    IF_SETTRANS(int2, comp(764, 19));  // combatv2_channel_bar:bar_right_end_indicator_glow_graphic
    if ((int3 >= (30 * 2))) {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}