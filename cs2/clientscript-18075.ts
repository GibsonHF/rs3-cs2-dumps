//
function script18075(int0: number, int1: number): void {
    var int2 = ((int0 + IF_GETHEIGHT(comp(1226, 32))) + 20);  // bp3_missions_tab:mission_info_chain_layer
    IF_SETSCROLLPOS(0, 0, int1);
    IF_SETSCROLLSIZE(IF_GETWIDTH(int1), int2, int1);
    if ((int2 > IF_GETHEIGHT(int1))) {
        script7791(80347164, int1);
    } else {
        CC_DELETEALL(comp(1226, 28));  // bp3_missions_tab:mission_info_scroll_bar
    };
    return;
}