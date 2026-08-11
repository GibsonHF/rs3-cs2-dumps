//
function script18766(int0: number, int1: number, int2: number, string0: string): void {
    varclient_7415 = int0;
    varclient_7413 = CLIENTCLOCK();
    varclient_7414 = (CLIENTCLOCK() + (30 * int1));
    IF_SETONTIMER(callback(), comp(764, 0));  // combatv2_channel_bar:universe
    IF_SETSIZE(0, (12 + 4), 1, 0, comp(764, 2));  // combatv2_channel_bar:header_layer
    IF_SETSIZE(0, 12, 1, 1, comp(764, 1));  // combatv2_channel_bar:background_layer
    switch (int0) {
        case 0: {
            IF_SETSIZE(0, 0, 1, 1, comp(764, 11));  // combatv2_channel_bar:bar_mask_layer
            IF_SETPOSITION(2, 0, 2, 1, comp(764, 10));  // combatv2_channel_bar:bar_indicator_layer
            break;
        }
        case 1: {
            IF_SETSIZE(0, 0, 0, 1, comp(764, 11));  // combatv2_channel_bar:bar_mask_layer
            IF_SETPOSITION((0 - 2), 0, 0, 1, comp(764, 10));  // combatv2_channel_bar:bar_indicator_layer
            break;
        }
    };
    script18770(string0);
    script18773(int2);
    script18774(0);
    CC_DELETEALL(comp(764, 13));  // combatv2_channel_bar:bar_mask_marker_layer
    var int3 = -1;
    int3 = (int3 + 1);
    while ((int3 < int1)) {
        script2996(50069517, IF_GETNEXTSUBID(comp(764, 13) /*combatv2_channel_bar:bar_mask_marker_layer*/), ((IF_GETWIDTH(comp(764, 9) /*combatv2_channel_bar:bar_progress_layer*/) - (2 * 1)) - SCALE((30 * int3), (varclient_7414 - varclient_7413), (IF_GETWIDTH(comp(764, 9) /*combatv2_channel_bar:bar_progress_layer*/) - (2 * 1)))), 0, 0, 1, 1, 0, 0, 1, 4127);
    };
    IF_SETONTIMER(callback(script18767), comp(764, 9));  // combatv2_channel_bar:bar_progress_layer
    script18777();
    return;
}