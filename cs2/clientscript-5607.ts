//
function script5607(): void {
    IF_SETTEXT(`${inttostring(varclient_1747, 10)} - ${inttostring(varclient_1746, 10)}`, comp(1194, 8));  // xmas11_snowman_score_overlay:xmas11_score
    if ((varclient_1748 == true)) {
        IF_SETTEXT("Whitezag", comp(1194, 6));  // xmas11_snowman_score_overlay:xmas11_grayzag
    } else {
        IF_SETTEXT("Grayzag", comp(1194, 6));  // xmas11_snowman_score_overlay:xmas11_grayzag
    };
    return;
}