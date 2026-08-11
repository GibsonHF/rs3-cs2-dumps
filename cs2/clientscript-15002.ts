//
function script15002(): void {
    varclient_6786 = "";
    IF_SETONTIMER(callback(), comp(1311, 135));  // mtxmgt:search_layer
    IF_SETTEXT("Search...", comp(1311, 140));  // mtxmgt:search_input_display
    IF_SETCOLOUR(script10495(3), comp(1311, 140));  // mtxmgt:search_input_display
    IF_SETHIDE(true, comp(1311, 142));  // mtxmgt:search_cancel
    script13965(85917832, -1, 28549);
    return;
}