//
function script8451(int0: number): void {
    if ((int0 == comp(1559, 25))) {  // toplevel_v2_inspect_worn_stats:main_layer
        IF_SETSIZE(0, 378, 1, 0, int0);
        IF_SETHIDE(true, comp(1559, 17));  // toplevel_v2_inspect_worn_stats:player_name_text
        IF_SETSIZE(IF_GETWIDTH(comp(1559, 10) /*toplevel_v2_inspect_worn_stats:health_bar_bounds_layer*/), IF_GETHEIGHT(comp(1559, 13) /*toplevel_v2_inspect_worn_stats:health_bar_graphic*/), 0, 0, comp(1559, 13) /*toplevel_v2_inspect_worn_stats:health_bar_graphic*/);
        IF_SETSIZE(IF_GETWIDTH(comp(1559, 7) /*toplevel_v2_inspect_worn_stats:prayer_bar_bounds_layer*/), IF_GETHEIGHT(comp(1559, 11) /*toplevel_v2_inspect_worn_stats:prayer_bar_graphic*/), 0, 0, comp(1559, 11) /*toplevel_v2_inspect_worn_stats:prayer_bar_graphic*/);
        IF_SETONVARTRANSMIT(callback(script8453, int0, 4964, 4972, 4975, 3), int0);
        IF_SETONINVTRANSMIT(callback(script8453, int0, 742, 1), int0);
        IF_SETPOSITION(IF_GETX(comp(1559, 16)), (IF_GETY(comp(1559, 16)) - 20), 0, 0, comp(1559, 16));  // toplevel_v2_inspect_worn_stats:equip_info_layer
        IF_SETPOSITION(IF_GETX(comp(1559, 28)), (IF_GETY(comp(1559, 28)) + 5), 0, 0, comp(1559, 28));  // toplevel_v2_inspect_worn_stats:stats_box
        IF_SETSIZE(0, 10, 1, 1, comp(1559, 5));  // toplevel_v2_inspect_worn_stats:stats_box_bg
    } else {
        IF_SETSIZE(274, 404, 0, 0, comp(1463, 30));  // toplevel_v2_parent_suboverlay_worn_stats:main_layer
        IF_SETHIDE(false, comp(1463, 21));  // toplevel_v2_parent_suboverlay_worn_stats:player_name_text
        IF_SETONVARTRANSMIT(callback(script8453, int0, 715, 716, 711, 3), int0);
        IF_SETONINVTRANSMIT(callback(script8453, int0, 94, 1), int0);
    };
    script8452(int0);
    return;
}