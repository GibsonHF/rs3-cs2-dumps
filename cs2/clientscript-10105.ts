//
function script10105(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = (int1 - int0);
    if ((int1 != -1)) {
        if ((int1 == -1337)) {
            int2 = SCALE(230, 200, MIN(200, varclient_4275));
            IF_SETSIZE(int2, IF_GETHEIGHT(comp(1515, 28)), 0, 0, comp(1515, 28));  // sb_overlay:progress_bar
            IF_SETHIDE(false, comp(1515, 30));  // sb_overlay:progress_text
            IF_SETTEXT(`Wall health: ${inttostring(SCALE((int2 * 2), 100, 43), 10)}%`, comp(1515, 30));  // sb_overlay:progress_text
        } else if ((CLIENTCLOCK() > int1)) {
            IF_SETONTIMER(callback(), comp(1515, 20));  // sb_overlay:progress_bar_layer
            IF_SETHIDE(true, comp(1515, 18));  // sb_overlay:progress_holder
            IF_SETSIZE(0, IF_GETHEIGHT(comp(1515, 28)), 0, 0, comp(1515, 28));  // sb_overlay:progress_bar
        } else {
            int2 = (100 - SCALE(MAX(0, (int1 - CLIENTCLOCK())), int3, 100));
            int2 = SCALE(230, 100, MIN(100, int2));
            IF_SETSIZE(int2, IF_GETHEIGHT(comp(1515, 28)), 0, 0, comp(1515, 28));  // sb_overlay:progress_bar
            IF_SETHIDE(false, comp(1515, 30));  // sb_overlay:progress_text
            IF_SETTEXT(`Burn: ${inttostring(SCALE((int2 + 2), 100, 43), 10)}%`, comp(1515, 30));  // sb_overlay:progress_text
        };
    } else {
        int2 = SCALE(230, 200, MIN(200, varclient_4274));
        IF_SETSIZE(int2, IF_GETHEIGHT(comp(1515, 28)), 0, 0, comp(1515, 28));  // sb_overlay:progress_bar
        IF_SETHIDE(false, comp(1515, 30));  // sb_overlay:progress_text
        IF_SETTEXT(`Acidity level: ${inttostring(varclient_4274, 10)}%`, comp(1515, 30));  // sb_overlay:progress_text
    };
    return;
}