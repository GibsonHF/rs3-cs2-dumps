//[clientscript,blast_furnace_bar_stock]
function script2041(): void {
    IF_SETTEXT(`Steel: ${inttostring(varbitplayer_3629, 10)}`, comp(28, 3));
    if ((varbitplayer_3629 > 0)) {
        IF_SETCOLOUR(16750623, comp(28, 13));
        IF_SETCOLOUR(16750623, comp(28, 3));
    } else {
        IF_SETCOLOUR(10066329, comp(28, 13));
        IF_SETCOLOUR(10066329, comp(28, 3));
    };
    IF_SETTEXT(`Mithril: ${inttostring(varbitplayer_3630, 10)}`, comp(28, 2));
    if ((varbitplayer_3630 > 0)) {
        IF_SETCOLOUR(16750623, comp(28, 11));
        IF_SETCOLOUR(16750623, comp(28, 2));
    } else {
        IF_SETCOLOUR(10066329, comp(28, 11));
        IF_SETCOLOUR(10066329, comp(28, 2));
    };
    IF_SETTEXT(`Adamant: ${inttostring(varbitplayer_3631, 10)}`, comp(28, 1));
    if ((varbitplayer_3631 > 0)) {
        IF_SETCOLOUR(16750623, comp(28, 9));
        IF_SETCOLOUR(16750623, comp(28, 1));
    } else {
        IF_SETCOLOUR(10066329, comp(28, 9));
        IF_SETCOLOUR(10066329, comp(28, 1));
    };
    IF_SETTEXT(`Rune: ${inttostring(varbitplayer_3632, 10)}`, comp(28, 0));
    if ((varbitplayer_3632 > 0)) {
        IF_SETCOLOUR(16750623, comp(28, 7));
        IF_SETCOLOUR(16750623, comp(28, 0));
    } else {
        IF_SETCOLOUR(10066329, comp(28, 7));
        IF_SETCOLOUR(10066329, comp(28, 0));
    };
    return;
}