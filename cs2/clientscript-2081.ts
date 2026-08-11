//
function script2081(): void {
    if ((varclient_639 > 0)) {
        IF_SETTEXT(inttostring(varclient_641, 10), comp(836, 10));  // snp_game_overlay:blue_level
    } else {
        IF_SETTEXT("---", comp(836, 10));  // snp_game_overlay:blue_level
    };
    return;
}