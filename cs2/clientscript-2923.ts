//[clientscript,settings_init]
function script2923(): void {
    if ((script19316() == 1)) {
        IF_SETONCLANSETTINGSTRANSMIT(callback(script2929), 23920646);
    };
    IF_SETSIZE(0, 0, 1, 1, comp(365, 6));  // settings:tab_contents_game
    varclient_6501 = 0;
    varclient_7769 = "";
    IF_SETTEXT("", comp(365, 2));  // settings:search_input
    unk10992("Search...", -1701144064, 255, 23920642);
    if ((script6431() == 1)) {
        if ((CLIENTTYPE() == 8)) {
            IF_SETHIDE(true, comp(365, 1));  // settings:search_container
            IF_SETSIZE(220, 0, 0, 1, comp(365, 3));  // settings:cat_container
        } else {
            IF_SETPOSITION(0, 0, 0, 0, comp(365, 1));  // settings:search_container
            IF_SETPOSITION(0, 0, 0, 2, comp(365, 3));  // settings:cat_container
        };
    } else {
        IF_SETPOSITION(0, 0, 0, 0, comp(365, 1));  // settings:search_container
        IF_SETPOSITION(0, 0, 0, 2, comp(365, 3));  // settings:cat_container
    };
    script2957(script20385(), script20386(), 1);
    return;
}