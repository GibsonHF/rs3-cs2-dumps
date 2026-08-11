//
function script20271(): void {
    IF_SETHIDE(true, comp(1443, 27));  // league_parent_relics:passives_relic_title
    IF_SETHIDE(false, comp(1443, 26));  // league_parent_relics:bg_passive
    IF_SETENABLED(true, comp(1443, 38));  // league_parent_relics:body_confirm
    IF_SETENABLED(false, comp(1443, 45));
    IF_SETONTIMER(callback(), comp(1443, 45));
    return;
}