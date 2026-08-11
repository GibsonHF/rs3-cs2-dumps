//
function script5108(int0: number): void {
    if ((int0 == 1)) {
        IF_SETSIZE(0, 20, 1, 1, comp(1116, 50));  // clan_signpost:background_panel
        IF_SETHIDE(false, comp(1116, 40));  // clan_signpost:details_panel_tab_layer
        script5110(1);
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1116, 50));  // clan_signpost:background_panel
        IF_SETHIDE(true, comp(1116, 40));  // clan_signpost:details_panel_tab_layer
        script5110(0);
    };
    return;
}