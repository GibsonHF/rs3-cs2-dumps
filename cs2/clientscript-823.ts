//
function script823(): void {
    if ((varbitplayer_41523 >= 2)) {
        IF_SETSIZE(74, 8, 0, 0, comp(202, 8));  // trh149:progress_bar_1
        IF_SETGRAPHIC(917 as graphic, comp(202, 13));  // trh149:milestone_bg_1
    };
    if ((varbitplayer_41523 >= 5)) {
        IF_SETSIZE(87, 8, 0, 0, comp(202, 9));  // trh149:progress_bar_2
        IF_SETGRAPHIC(917 as graphic, comp(202, 17));  // trh149:milestone_bg_2
    };
    if ((varbitplayer_41523 >= 15)) {
        IF_SETSIZE(126, 8, 0, 0, comp(202, 10));  // trh149:progress_bar_3
        IF_SETGRAPHIC(917 as graphic, comp(202, 25));  // trh149:milestone_bg_3
    };
    if ((varbitplayer_41523 >= 30)) {
        IF_SETSIZE(147, 8, 0, 0, comp(202, 11));  // trh149:progress_bar_4
        IF_SETGRAPHIC(917 as graphic, comp(202, 22));  // trh149:milestone_bg_4
        return;
    };
    script856();
    return;
}