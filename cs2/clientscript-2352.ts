//[clientscript,xbows_setfont]
function script2352(): void {
    if (((MAP_LANG() == 2) || (MAP_LANG() == 3))) {
        IF_SETTEXTFONT(66 as fontmetrics, comp(433, 16));  // xbows_pouch:text1
        IF_SETTEXTFONT(66 as fontmetrics, comp(433, 17));  // xbows_pouch:text2
        IF_SETTEXTFONT(66 as fontmetrics, comp(433, 18));  // xbows_pouch:text3
        IF_SETTEXTFONT(66 as fontmetrics, comp(433, 19));  // xbows_pouch:text4
        IF_SETTEXTFONT(66 as fontmetrics, comp(433, 20));  // xbows_pouch:text5
    };
    return;
}