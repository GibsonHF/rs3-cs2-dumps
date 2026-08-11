//
function script5137(int0: number): void {
    IF_SETHIDE(true, comp(1096, 207));  // clansettings:tab_selected_1
    IF_SETHIDE(true, comp(1096, 215));  // clansettings:tab_selected_2
    IF_SETHIDE(true, comp(1096, 223));  // clansettings:tab_selected_3
    IF_SETHIDE(true, comp(1096, 231));  // clansettings:tab_selected_4
    IF_SETHIDE(true, comp(1096, 239));  // clansettings:tab_selected_5
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1096, 207));  // clansettings:tab_selected_1
    } else if ((int0 == 2)) {
        IF_SETHIDE(false, comp(1096, 215));  // clansettings:tab_selected_2
    } else if ((int0 == 3)) {
        IF_SETHIDE(false, comp(1096, 223));  // clansettings:tab_selected_3
    } else if ((int0 == 4)) {
        IF_SETHIDE(false, comp(1096, 231));  // clansettings:tab_selected_4
    } else if ((int0 == 5)) {
        IF_SETHIDE(false, comp(1096, 239));  // clansettings:tab_selected_5
    };
    return;
}