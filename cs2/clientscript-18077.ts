//
function script18077(): void {
    CC_DELETEALL(comp(1226, 30));  // bp3_missions_tab:mission_info_content_layer
    CC_DELETEALL(comp(1226, 28));  // bp3_missions_tab:mission_info_scroll_bar
    IF_SETSCROLLSIZE(0, 0, comp(1226, 30));  // bp3_missions_tab:mission_info_content_layer
    CC_DELETEALL(comp(1226, 31));  // bp3_missions_tab:mission_info_chain_title_layer
    CC_DELETEALL(comp(1226, 32));  // bp3_missions_tab:mission_info_chain_layer
    CC_DELETEALL(comp(1226, 29));  // bp3_missions_tab:mission_info_chain_scroll_bar
    IF_SETSCROLLSIZE(0, 0, comp(1226, 32));  // bp3_missions_tab:mission_info_chain_layer
    return;
}