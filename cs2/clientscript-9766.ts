//
function script9766(): void {
    if ((varbitplayer_22669 == 1)) {
        IF_SETGRAPHIC(18526 as graphic, comp(864, 8));  // trh17_config:mode_selected_free
        IF_SETGRAPHIC(18525 as graphic, comp(864, 6));  // trh17_config:mode_selected_rolling
    } else {
        IF_SETGRAPHIC(18525 as graphic, comp(864, 8));  // trh17_config:mode_selected_free
        IF_SETGRAPHIC(18526 as graphic, comp(864, 6));  // trh17_config:mode_selected_rolling
    };
    if ((varbitplayer_22670 == 0)) {
        IF_SETGRAPHIC(18525 as graphic, comp(864, 22));  // trh17_config:ball_selected_1
    } else {
        IF_SETGRAPHIC(18526 as graphic, comp(864, 22));  // trh17_config:ball_selected_1
    };
    if ((varbitplayer_22670 == 1)) {
        IF_SETGRAPHIC(18525 as graphic, comp(864, 20));  // trh17_config:ball_selected_2
    } else {
        IF_SETGRAPHIC(18526 as graphic, comp(864, 20));  // trh17_config:ball_selected_2
    };
    if ((varbitplayer_22670 == 2)) {
        IF_SETGRAPHIC(18525 as graphic, comp(864, 18));  // trh17_config:ball_selected_3
    } else {
        IF_SETGRAPHIC(18526 as graphic, comp(864, 18));  // trh17_config:ball_selected_3
    };
    if ((varbitplayer_22670 == 3)) {
        IF_SETGRAPHIC(18525 as graphic, comp(864, 16));  // trh17_config:ball_selected_4
    } else {
        IF_SETGRAPHIC(18526 as graphic, comp(864, 16));  // trh17_config:ball_selected_4
    };
    if ((varbitplayer_22670 == 4)) {
        IF_SETGRAPHIC(18525 as graphic, comp(864, 14));  // trh17_config:ball_selected_5
    } else {
        IF_SETGRAPHIC(18526 as graphic, comp(864, 14));  // trh17_config:ball_selected_5
    };
    if ((varbitplayer_22670 == 5)) {
        IF_SETGRAPHIC(18525 as graphic, comp(864, 12));  // trh17_config:ball_selected_6
    } else {
        IF_SETGRAPHIC(18526 as graphic, comp(864, 12));  // trh17_config:ball_selected_6
    };
    return;
}