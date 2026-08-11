//
function script16141(int0: number): void {
    if ((int0 == 116850692)) {
        if ((IF_GETHIDE(comp(1783, 7)) == true)) {  // toplevel_v2_parent_suboverlay_questlist_v4:controls_filters_layer
            IF_SETHIDE(false, comp(1783, 7));  // toplevel_v2_parent_suboverlay_questlist_v4:controls_filters_layer
            IF_SETGRAPHIC(24448 as graphic, comp(1783, 5));  // toplevel_v2_parent_suboverlay_questlist_v4:controls_filters_button_graphic
        } else {
            IF_SETHIDE(true, comp(1783, 7));  // toplevel_v2_parent_suboverlay_questlist_v4:controls_filters_layer
            IF_SETGRAPHIC(24449 as graphic, comp(1783, 5));  // toplevel_v2_parent_suboverlay_questlist_v4:controls_filters_button_graphic
        };
    } else if ((int0 == 12451849)) {
        if ((IF_GETHIDE(comp(190, 14)) == true)) {  // questlist_v4:controls_filters_layer
            IF_SETHIDE(false, comp(190, 14));  // questlist_v4:controls_filters_layer
            IF_SETGRAPHIC(24448 as graphic, comp(190, 10));  // questlist_v4:controls_filters_button_graphic
        } else {
            IF_SETHIDE(true, comp(190, 14));  // questlist_v4:controls_filters_layer
            IF_SETGRAPHIC(24449 as graphic, comp(190, 10));  // questlist_v4:controls_filters_button_graphic
        };
    };
    return;
}