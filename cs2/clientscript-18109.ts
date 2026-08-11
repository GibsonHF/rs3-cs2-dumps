//
function script18109(int0: number): void {
    if ((int0 > IF_GETHEIGHT(comp(403, 9)))) {  // bp3_buffs_tab:xp_buff_content_layer
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(403, 9)), (int0 + 10), comp(403, 9));  // bp3_buffs_tab:xp_buff_content_layer
        script7791(26411019, 26411017);
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(403, 9));  // bp3_buffs_tab:xp_buff_content_layer
        CC_DELETEALL(comp(403, 11));  // bp3_buffs_tab:xp_buff_scroll_bar
    };
    return;
}