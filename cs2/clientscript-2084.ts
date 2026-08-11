//
function script2084(): void {
    if ((varclient_640 > 0)) {
        IF_SETTEXT(`${inttostring(varclient_640, 10)}%`, comp(836, 15));  // snp_game_overlay:red_health
    } else {
        IF_SETTEXT("---", comp(836, 15));  // snp_game_overlay:red_health
    };
    return;
}