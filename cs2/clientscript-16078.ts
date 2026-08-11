//
function script16078(int0: number): void {
    if ((script13749() == 0)) {
        return;
    };
    if (((script20055() == 1) || (script10946() == 1))) {
        IF_SETHIDE(true, int0);
        return;
    };
    var int1 = (IF_GETX(comp(814, 5)) + IF_GETWIDTH(comp(814, 5)));  // lobbyscreen_mobile_billing_info:last_date
    var int2 = IF_GETX(int0);
    if ((int1 >= int2)) {
        IF_SETSIZE(51, 51, 0, 0, comp(814, 18));  // lobbyscreen_mobile_billing_info:member_state
        IF_SETPOSITION(0, 0, 1, 1, comp(814, 19));  // lobbyscreen_mobile_billing_info:button_graphic
        IF_SETPOSITION(71, 0, 2, 1, int0);
    };
    return;
}