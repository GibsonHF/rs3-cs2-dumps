//
function script3719(int0: number): void {
    IF_SETHIDE(true, comp(1614, 68));  // mm15_tasklist:task_list_tab_selected_layer
    IF_SETHIDE(true, comp(1614, 76));  // mm15_tasklist:rewards_tab_selected_layer
    IF_SETHIDE(true, comp(1614, 84));  // mm15_tasklist:info_tab_selected_layer
    IF_SETHIDE(true, comp(1614, 16));  // mm15_tasklist:task_list_layer
    IF_SETHIDE(true, comp(1614, 25));  // mm15_tasklist:rewards_layer
    IF_SETHIDE(true, comp(1614, 53));  // mm15_tasklist:info_layer
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1614, 68);  // mm15_tasklist:task_list_tab_selected_layer
            int2 = comp(1614, 16);  // mm15_tasklist:task_list_layer
            break;
        }
        case 2: {
            int1 = comp(1614, 76);  // mm15_tasklist:rewards_tab_selected_layer
            int2 = comp(1614, 25);  // mm15_tasklist:rewards_layer
            break;
        }
        case 3: {
            int1 = comp(1614, 84);  // mm15_tasklist:info_tab_selected_layer
            int2 = comp(1614, 53);  // mm15_tasklist:info_layer
            break;
        }
    };
    IF_SETHIDE(false, int1);
    IF_SETHIDE(false, int2);
    return;
}