//
function script13909(): void {
    IF_SETHIDE(true, comp(517, 198));  // bank:message_nomatches
    IF_SETHIDE(true, comp(517, 196));  // bank:message_nosearch
    script9303();
    script10239();
    varclient_6711 = "";
    script9511(1);
    varclient_6684 = 0;
    if ((CC_FIND(comp(517, 311), 14) == 1)) {  // bank:border_layer
        CC_SETTEXT("Bank of Gielinor");
    };
    IF_SETONTIMER(callback(), comp(517, 231));  // bank:bank_search_button_layer
    IF_SETONTIMER(callback(), comp(517, 233));  // bank:search_icon
    IF_SETHIDE(true, comp(517, 202));  // bank:diango_inv
    if (((varclient_2236 == 8) && (varclient_2235 == 33882346))) {
        script9(33882347, 33882348, 33882349, 33882351, "Search...");
        script8841(11, 0);
    };
    IF_SETHIDE(true, comp(517, 257));  // bank:bottom_panel_cancel
    return;
}