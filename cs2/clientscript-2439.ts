//
function script2439(): void {
    if ((varclient_818 == 1)) {
        IF_SETTEXT("Net: <col=FFFFFF>Ripped!", comp(15, 6));  // trawler_game_overlay:net_text
        IF_SETCOLOUR(14754595, comp(15, 6));  // trawler_game_overlay:net_text
    } else {
        IF_SETTEXT("Net: <col=FFFFFF>OK", comp(15, 6));  // trawler_game_overlay:net_text
        IF_SETCOLOUR(16750848, comp(15, 6));  // trawler_game_overlay:net_text
    };
    return;
}