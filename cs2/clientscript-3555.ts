//
function script3555(): void {
    if ((IF_GETHIDE(comp(1477, 805)) == false)) {  // toplevel_v2:escape_menu
        if ((script8292(-1, -1) == 1)) {
            if ((struct_getparam(21301, 3507) != comp(-1, 65535))) {
                IF_TRIGGEROP(struct_getparam(21301, 3507), 1, 1);
            };
        } else if ((IF_GETHIDE(comp(274, 192)) == false)) {  // escape_menu_mobile:logout_popup
            IF_SETHIDE(true, comp(274, 192));  // escape_menu_mobile:logout_popup
        } else if ((IF_GETHIDE(comp(274, 179)) == false)) {  // escape_menu_mobile:side_panel
            script9540();
        } else if ((script15532(0) == 1)) {
            IF_TRIGGEROP(comp(279, 1), -1, 1);  // mobile_ribbon_left:home_screen_button
        } else {
            script8182();
        };
    };
    return;
}