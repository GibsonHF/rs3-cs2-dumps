//
function script18076(): void {
    script18077();
    var int0 = 0;
    if ((IF_FIND(comp(1226, 32)) == 1)) {  // bp3_missions_tab:mission_info_chain_layer
        script10485(1, int0, 60, 45, 0, 0, 0, 30, 1, 0, 7982, "No Mission Selected");
        int0 = (int0 + 1);
    };
    if ((IF_FIND(comp(1226, 30)) == 1)) {  // bp3_missions_tab:mission_info_content_layer
        script17952(1, int0, 10, 120, 0, 0, (IF_GETWIDTH(comp(1226, 30)) - 20), 0, 8003, "Selected a mission for more information.", (IF_GETWIDTH(comp(1226, 30)) - 30), 209);  // bp3_missions_tab:mission_info_content_layer
        int0 = (int0 + 1);
    };
    return;
}