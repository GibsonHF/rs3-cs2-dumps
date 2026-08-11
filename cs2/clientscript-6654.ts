//
function script6654(int0: number): void {
    IF_SETPOSITION((IF_GETX(IF_GETLAYER(int0)) + IF_GETWIDTH(int0)), (IF_GETY(IF_GETLAYER(int0)) - (IF_GETHEIGHT(IF_GETLAYER(int0)) / 2)), 0, 0, comp(1321, 150));  // clav_customise:part_theme_layer
    IF_SETHIDE(false, comp(1321, 150));  // clav_customise:part_theme_layer
    IF_SETHIDE(false, comp(1321, 147));  // clav_customise:prevent_click
    if ((((varbitplayer_8735 == 1) || (varbitplayer_8735 == 2)) || (varbitplayer_8735 == 3))) {
        IF_SETHIDE(false, comp(1321, 198));  // clav_customise:none_selected
    } else {
        IF_SETHIDE(true, comp(1321, 198));  // clav_customise:none_selected
    };
    return;
}