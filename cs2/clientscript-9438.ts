//
function script9438(int0: number): void {
    IF_SETHIDE(true, comp(718, 68));  // 6awe2_golem_construction:panel_loading_overlay
    IF_SETHIDE(true, comp(718, 88));  // 6awe2_golem_construction:panel_tab_highlight
    IF_SETPOSITION((4 + (int0 * 120)), 0, 0, 0, comp(718, 92));  // 6awe2_golem_construction:panel_tab_selected
    switch (int0) {
        case 0: {
            if ((varbitplayer_21115 == 3)) {
                IF_SETGRAPHIC(19070 as graphic, comp(718, 9));  // 6awe2_golem_construction:option_graphic_1
                IF_SETGRAPHIC(19071 as graphic, comp(718, 14));  // 6awe2_golem_construction:option_graphic_2
                IF_SETGRAPHIC(19072 as graphic, comp(718, 19));  // 6awe2_golem_construction:option_graphic_3
            } else {
                IF_SETGRAPHIC(19058 as graphic, comp(718, 9));  // 6awe2_golem_construction:option_graphic_1
                IF_SETGRAPHIC(19059 as graphic, comp(718, 14));  // 6awe2_golem_construction:option_graphic_2
                IF_SETGRAPHIC(19060 as graphic, comp(718, 19));  // 6awe2_golem_construction:option_graphic_3
            };
            break;
        }
        case 1: {
            if ((varbitplayer_21115 == 3)) {
                IF_SETGRAPHIC(19064 as graphic, comp(718, 9));  // 6awe2_golem_construction:option_graphic_1
                IF_SETGRAPHIC(19065 as graphic, comp(718, 14));  // 6awe2_golem_construction:option_graphic_2
                IF_SETGRAPHIC(19066 as graphic, comp(718, 19));  // 6awe2_golem_construction:option_graphic_3
            } else {
                IF_SETGRAPHIC(19052 as graphic, comp(718, 9));  // 6awe2_golem_construction:option_graphic_1
                IF_SETGRAPHIC(19053 as graphic, comp(718, 14));  // 6awe2_golem_construction:option_graphic_2
                IF_SETGRAPHIC(19054 as graphic, comp(718, 19));  // 6awe2_golem_construction:option_graphic_3
            };
            break;
        }
        case 2: {
            if ((varbitplayer_21115 == 3)) {
                IF_SETGRAPHIC(19067 as graphic, comp(718, 9));  // 6awe2_golem_construction:option_graphic_1
                IF_SETGRAPHIC(19068 as graphic, comp(718, 14));  // 6awe2_golem_construction:option_graphic_2
                IF_SETGRAPHIC(19069 as graphic, comp(718, 19));  // 6awe2_golem_construction:option_graphic_3
            } else {
                IF_SETGRAPHIC(19055 as graphic, comp(718, 9));  // 6awe2_golem_construction:option_graphic_1
                IF_SETGRAPHIC(19056 as graphic, comp(718, 14));  // 6awe2_golem_construction:option_graphic_2
                IF_SETGRAPHIC(19057 as graphic, comp(718, 19));  // 6awe2_golem_construction:option_graphic_3
            };
            break;
        }
        case 3: {
            if ((varbitplayer_21115 == 3)) {
                IF_SETGRAPHIC(19073 as graphic, comp(718, 9));  // 6awe2_golem_construction:option_graphic_1
                IF_SETGRAPHIC(19074 as graphic, comp(718, 14));  // 6awe2_golem_construction:option_graphic_2
                IF_SETGRAPHIC(21383 as graphic, comp(718, 19));  // 6awe2_golem_construction:option_graphic_3
            } else {
                IF_SETGRAPHIC(19061 as graphic, comp(718, 9));  // 6awe2_golem_construction:option_graphic_1
                IF_SETGRAPHIC(19062 as graphic, comp(718, 14));  // 6awe2_golem_construction:option_graphic_2
                IF_SETGRAPHIC(19063 as graphic, comp(718, 19));  // 6awe2_golem_construction:option_graphic_3
            };
            break;
        }
    };
    script9441(47054873);
    script9441(47054882);
    script9441(47054891);
    return;
}