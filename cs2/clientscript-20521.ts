//
function script20521(): void {
    if ((IF_GETHEIGHT(comp(1475, 51)) >= 404)) {  // toplevel_v2_edit_mode:edit_mode_blocker
        IF_SETOP(1, "Expand", comp(1475, 57));  // toplevel_v2_edit_mode:dropdown_click_load
        IF_SETVFLIP(0, comp(1475, 58));  // toplevel_v2_edit_mode:collapse_button
        script14092(96665651, -1, 150, 0, 60, 0, 20, 0);
    } else {
        IF_SETOP(1, "Collapse", comp(1475, 57));  // toplevel_v2_edit_mode:dropdown_click_load
        IF_SETVFLIP(1, comp(1475, 58));  // toplevel_v2_edit_mode:collapse_button
        script14092(96665651, -1, 450, 0, 404, 0, 20, 0);
    };
    return;
}