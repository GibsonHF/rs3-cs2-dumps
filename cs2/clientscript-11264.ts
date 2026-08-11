//
function script11264(int0: number): void {
    IF_SETHIDE(true, comp(1610, 19));  // jmod_tool:tools_tab
    IF_SETHIDE(true, comp(1610, 20));  // jmod_tool:status_tab
    IF_SETHIDE(true, comp(1610, 36));  // jmod_tool:chat_tab
    IF_SETHIDE(true, comp(1610, 47));  // jmod_tool:outfit_tab
    IF_SETHIDE(true, comp(1610, 57));  // jmod_tool:video_tab
    IF_SETHIDE(true, comp(1610, 98));  // jmod_tool:tools_tab_selected_layer
    IF_SETHIDE(true, comp(1610, 201));  // jmod_tool:status_tab_selected_layer
    IF_SETHIDE(true, comp(1610, 106));  // jmod_tool:chat_tab_selected_layer
    IF_SETHIDE(true, comp(1610, 114));  // jmod_tool:outfit_tab_selected_layer
    IF_SETHIDE(true, comp(1610, 376));  // jmod_tool:video_tab_selected_layer
    switch (int0) {
        case 105513059: {
            IF_SETHIDE(false, comp(1610, 19));  // jmod_tool:tools_tab
            IF_SETHIDE(false, comp(1610, 98));  // jmod_tool:tools_tab_selected_layer
            break;
        }
        case 105513162: {
            IF_SETHIDE(false, comp(1610, 20));  // jmod_tool:status_tab
            IF_SETHIDE(false, comp(1610, 201));  // jmod_tool:status_tab_selected_layer
            break;
        }
        case 105513067: {
            IF_SETHIDE(false, comp(1610, 36));  // jmod_tool:chat_tab
            IF_SETHIDE(false, comp(1610, 106));  // jmod_tool:chat_tab_selected_layer
            break;
        }
        case 105513075: {
            IF_SETHIDE(false, comp(1610, 47));  // jmod_tool:outfit_tab
            IF_SETHIDE(false, comp(1610, 114));  // jmod_tool:outfit_tab_selected_layer
            break;
        }
        case 105513337: {
            IF_SETHIDE(false, comp(1610, 57));  // jmod_tool:video_tab
            IF_SETHIDE(false, comp(1610, 376));  // jmod_tool:video_tab_selected_layer
            break;
        }
    };
    return;
}