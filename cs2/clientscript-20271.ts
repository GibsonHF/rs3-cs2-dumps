//
function script20271(): void {
    IF_SETHIDE(true, comp(1443, 27));  // league_parent_relics:confirm_popup
    IF_SETHIDE(false, comp(1443, 26));  // league_parent_relics:passive_info
    IF_SETENABLED(true, comp(1443, 38));  // league_parent_relics:overview_unlock
    IF_SETENABLED(false, comp(1443, 45));
    IF_SETONTIMER(callback(), comp(1443, 45));
    return;
}