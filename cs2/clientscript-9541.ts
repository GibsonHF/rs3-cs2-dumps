//
function script9541(): void {
    if ((IF_GETHIDE(comp(274, 192)) == true)) {  // escape_menu_mobile:logout_popup
        IF_SETHIDE(false, comp(274, 192));  // escape_menu_mobile:logout_popup
    } else {
        IF_SETHIDE(true, comp(274, 192));  // escape_menu_mobile:logout_popup
    };
    return;
}