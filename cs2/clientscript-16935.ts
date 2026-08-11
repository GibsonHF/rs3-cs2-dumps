//
function script16935(): number {
    if ((IF_GETHIDE(comp(906, 155)) == false)) {  // lobbyscreen:mobile_billing
        if ((IF_GETHIDE(comp(891, 3)) == false)) {  // mtx_front_end_confirm:confirm_buy_universe
            IF_SETHIDE(true, comp(891, 3));  // mtx_front_end_confirm:confirm_buy_universe
        } else {
            script16934();
        };
    };
    return -1;
}