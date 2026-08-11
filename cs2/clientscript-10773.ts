//
function script10773(): void {
    if ((varclient_4108 == 5)) {
        IF_SETHIDE(true, comp(1560, 25));  // player_inspect:expand_button_layer
        IF_SETPOSITION(40, 15, 2, 0, comp(1560, 24));  // player_inspect:main_report_button_layer
    } else {
        IF_SETHIDE(false, comp(1560, 25));  // player_inspect:expand_button_layer
        IF_SETPOSITION(15, 15, 0, 0, comp(1560, 24));  // player_inspect:main_report_button_layer
    };
    script10774();
    script9554(102236165, 102236183, 102236166, varclient_4669, 21217);
    script8471(102105089, 743);
    script8489(102039552, 102039566, 102039553, 102039560, 102039554, 102039555, 102039556, 102039557, 102039558, 102039559, 102039563);
    script1522(102039552, 102039561, 102039563, 102039564, 102039565);
    return;
}