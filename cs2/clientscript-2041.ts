//[clientscript,blast_furnace_bar_stock]
function script2041(): void {
    IF_SETTEXT(`Steel: ${inttostring(varbitplayer_3629, 10)}`, 1835011);
    if ((varbitplayer_3629 > 0)) {
        IF_SETCOLOUR(16750623, 1835021);
        IF_SETCOLOUR(16750623, 1835011);
    } else {
        IF_SETCOLOUR(10066329, 1835021);
        IF_SETCOLOUR(10066329, 1835011);
    };
    IF_SETTEXT(`Mithril: ${inttostring(varbitplayer_3630, 10)}`, 1835010);
    if ((varbitplayer_3630 > 0)) {
        IF_SETCOLOUR(16750623, 1835019);
        IF_SETCOLOUR(16750623, 1835010);
    } else {
        IF_SETCOLOUR(10066329, 1835019);
        IF_SETCOLOUR(10066329, 1835010);
    };
    IF_SETTEXT(`Adamant: ${inttostring(varbitplayer_3631, 10)}`, 1835009);
    if ((varbitplayer_3631 > 0)) {
        IF_SETCOLOUR(16750623, 1835017);
        IF_SETCOLOUR(16750623, 1835009);
    } else {
        IF_SETCOLOUR(10066329, 1835017);
        IF_SETCOLOUR(10066329, 1835009);
    };
    IF_SETTEXT(`Rune: ${inttostring(varbitplayer_3632, 10)}`, 1835008);
    if ((varbitplayer_3632 > 0)) {
        IF_SETCOLOUR(16750623, 1835015);
        IF_SETCOLOUR(16750623, 1835008);
    } else {
        IF_SETCOLOUR(10066329, 1835015);
        IF_SETCOLOUR(10066329, 1835008);
    };
    return;
}