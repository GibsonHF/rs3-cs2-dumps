//
function script7283(int0: number): void {
    if ((int0 == 1)) {
        if ((varclient_2611 != 0)) {
            printmessage("You cannot currently edit the crew.");
            return;
        };
        IF_SETHIDE(true, comp(916, 107));  // pop_ship:list_layer
        IF_SETHIDE(true, comp(916, 334));  // pop_ship:active_voyage_send_layer
        IF_SETHIDE(false, comp(916, 178));  // pop_ship:crew_manager_layer
        IF_SETHIDE(false, comp(916, 146));  // pop_ship:crew_compare_layer
        IF_SETHIDE(true, comp(916, 322));  // pop_ship:crew_roster_open
        IF_SETHIDE(false, comp(916, 321));  // pop_ship:crew_roster_close
    } else {
        IF_SETHIDE(false, comp(916, 322));  // pop_ship:crew_roster_open
        IF_SETHIDE(true, comp(916, 178));  // pop_ship:crew_manager_layer
        IF_SETHIDE(true, comp(916, 146));  // pop_ship:crew_compare_layer
        IF_SETHIDE(true, comp(916, 334));  // pop_ship:active_voyage_send_layer
    };
    return;
}