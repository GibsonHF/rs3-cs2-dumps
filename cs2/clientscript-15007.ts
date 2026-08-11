//
function script15007(): void {
    IF_SETONTIMER(callback(), comp(1311, 135));  // mtxmgt:search_layer
    if ((strcmp(varclient_2250, "") == 0)) {
        script15002();
    } else {
        varclient_6786 = varclient_2250;
        IF_SETTEXT(ESCAPE(varclient_2250), comp(1311, 140));  // mtxmgt:search_input_display
        IF_SETHIDE(false, comp(1311, 143));  // mtxmgt:search_input_clickout
        IF_SETHIDE(false, comp(1311, 142));  // mtxmgt:search_cancel
        IF_SETONCLICK(callback(script15005), comp(1311, 143));  // mtxmgt:search_input_clickout
        script7494();
        script7491(varclient_2699, varbitplayer_678, 0, varclient_2250);
        script13965(85917832, -1, 28549);
    };
    return;
}