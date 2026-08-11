//
function script20722(int0: number): void {
    if ((int0 == 1)) {
        if ((varbitplayer_61203 == 1)) {
            IF_SETTEXT("House Controls", comp(1665, 1));  // poh_house_controls:house_settings_title
            IF_SETHIDE(false, comp(1665, 3));  // poh_house_controls:instructions_layer
            IF_SETHIDE(true, comp(1665, 5));  // poh_house_controls:controls_layer
            script20723();
            script16272(1, 101, 8, 109117444, 5, 0);
            if ((script20783(varplayer_12920) == 1)) {
                script20778(0);
            } else {
                script20778(1);
            };
        } else {
            IF_SETHIDE(true, comp(1665, 3));  // poh_house_controls:instructions_layer
            IF_SETHIDE(false, comp(1665, 5));  // poh_house_controls:controls_layer
            CC_DELETEALL(comp(1665, 4));  // poh_house_controls:instructions_build
            if ((varbitplayer_61203 == 0)) {
                IF_SETHIDE(true, comp(1665, 7));  // poh_house_controls:information_pane
                IF_SETHIDE(true, comp(1665, 8));  // poh_house_controls:content_button_layer
                IF_SETHIDE(true, comp(1665, 2));  // poh_house_controls:neighbourhood_info_tooltip
                IF_SETHIDE(false, comp(1665, 6));  // poh_house_controls:neighbourhood_info
                script20726();
            } else {
                IF_SETTEXT("House Controls", comp(1665, 1));  // poh_house_controls:house_settings_title
                IF_SETHIDE(false, comp(1665, 7));  // poh_house_controls:information_pane
                IF_SETHIDE(false, comp(1665, 8));  // poh_house_controls:content_button_layer
                IF_SETHIDE(false, comp(1665, 2));  // poh_house_controls:neighbourhood_info_tooltip
                IF_SETHIDE(true, comp(1665, 6));  // poh_house_controls:neighbourhood_info
            };
        };
    } else {
        IF_SETHIDE(true, comp(1665, 3));  // poh_house_controls:instructions_layer
        IF_SETHIDE(false, comp(1665, 5));  // poh_house_controls:controls_layer
        CC_DELETEALL(comp(1665, 4));  // poh_house_controls:instructions_build
        if ((varbitplayer_61203 == 0)) {
            IF_SETHIDE(true, comp(1665, 7));  // poh_house_controls:information_pane
            IF_SETHIDE(true, comp(1665, 8));  // poh_house_controls:content_button_layer
            IF_SETHIDE(true, comp(1665, 2));  // poh_house_controls:neighbourhood_info_tooltip
            IF_SETHIDE(false, comp(1665, 6));  // poh_house_controls:neighbourhood_info
            script20726();
        } else {
            IF_SETTEXT("House Controls", comp(1665, 1));  // poh_house_controls:house_settings_title
            IF_SETHIDE(false, comp(1665, 7));  // poh_house_controls:information_pane
            IF_SETHIDE(false, comp(1665, 8));  // poh_house_controls:content_button_layer
            IF_SETHIDE(false, comp(1665, 2));  // poh_house_controls:neighbourhood_info_tooltip
            IF_SETHIDE(true, comp(1665, 6));  // poh_house_controls:neighbourhood_info
        };
    };
    return;
}