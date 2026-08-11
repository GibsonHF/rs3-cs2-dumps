//
function script1538(): void {
    var int0 = (25 + (14 * PARAHEIGHT(IF_GETTEXT(comp(18, 8)), 340, 26 as fontmetrics)));  // tuska_island_overlay:tutorial_text
    if ((IF_GETHEIGHT(comp(18, 22)) == int0)) {  // tuska_island_overlay:tutorial_panel
        IF_SETONTIMER(callback(script1539, 0), comp(18, 14));  // tuska_island_overlay:help_button
    } else {
        IF_SETONTIMER(callback(script1539, int0), comp(18, 14));  // tuska_island_overlay:help_button
    };
    return;
}