//
function script10336(int0: number, string0: string): void {
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1519, 56));  // group_child:set_status_button_active
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1520, 23));  // group_child_dropdown:set_status_button_active
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1528, 46));  // toplevel_v2_parent_suboverlay_group:set_status_button_active
    IF_SETGRAPHIC(int0, comp(1519, 57));  // group_child:set_status_button
    IF_SETGRAPHIC(int0, comp(1520, 24));  // group_child_dropdown:set_status_button
    IF_SETGRAPHIC(int0, comp(1528, 47));  // toplevel_v2_parent_suboverlay_group:set_status_button
    IF_SETOP(1, "Change status", comp(1519, 56));  // group_child:set_status_button_active
    IF_SETOP(1, "Change status", comp(1520, 23));  // group_child_dropdown:set_status_button_active
    IF_SETOP(1, "Change status", comp(1528, 46));  // toplevel_v2_parent_suboverlay_group:set_status_button_active
    return;
}