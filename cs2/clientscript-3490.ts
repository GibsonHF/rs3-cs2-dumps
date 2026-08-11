//
function script3490(): void {
    if ((IF_GETHIDE(comp(916, 13)) == true)) {  // pop_ship:resources_box
        IF_SETHIDE(false, comp(916, 13));  // pop_ship:resources_box
    } else {
        IF_SETHIDE(true, comp(916, 13));  // pop_ship:resources_box
    };
    return;
}