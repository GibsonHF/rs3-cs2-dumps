//
function script10103(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(int0);
    if ((int1 == 0)) {
        IF_SETHIDE(true, comp(1515, 30));  // sb_overlay:progress_text
        int2 = SCALE(int2, 230, 100);
        if ((IF_GETCOLOUR(comp(1515, 29)) == 16757760)) {  // sb_overlay:progress_graphic
            IF_SETTEXT(`Burn: ${inttostring(int2, 10)}%`, comp(1515, 30));  // sb_overlay:progress_text
        } else if ((IF_GETCOLOUR(comp(1515, 29)) == 51455)) {  // sb_overlay:progress_graphic
            IF_SETTEXT(`Wall health: ${inttostring((int2 * 2), 10)}%`, comp(1515, 30));  // sb_overlay:progress_text
        } else {
            IF_SETTEXT(`Acidity level: ${inttostring(varclient_4274, 10)}%`, comp(1515, 30));  // sb_overlay:progress_text
        };
    } else {
        IF_SETHIDE(true, comp(1515, 30));  // sb_overlay:progress_text
    };
    return;
}