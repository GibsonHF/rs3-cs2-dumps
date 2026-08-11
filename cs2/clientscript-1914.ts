//
function script1914(): void {
    CC_DELETEALL(comp(267, 55));  // qps:tab2_track_layer_build
    CC_DELETEALL(comp(267, 56));  // qps:tab2_track_layer_click
    IF_SETGRAPHIC(2217 as graphic, comp(267, 44));  // qps:tab2_background
    IF_SETGRAPHIC(30104 as graphic, comp(267, 48));  // qps:tab2_topbar_currency_icon
    IF_SETTEXT(inttostring((varplayer_1297 - varbitplayer_42073), 10), comp(267, 49));  // qps:tab2_topbar_currency_text
    var int0 = ENUM_GETOUTPUTCOUNT(14536 as cs2enum);
    script1917(int0);
    return;
}