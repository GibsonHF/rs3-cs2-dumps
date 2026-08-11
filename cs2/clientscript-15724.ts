//
function script15724(): void {
    CC_DELETEALL(comp(828, 3));  // mobile_shop_hard_currency:build_wrapper
    IF_SETHIDE(true, comp(891, 3));  // mtx_front_end_confirm:confirm_buy_universe
    SHOP_REQUESTDATA();
    script9525(54263811, 3, -1);
    IF_SETONTIMER(callback(script15725), comp(828, 3));  // mobile_shop_hard_currency:build_wrapper
    script20623(4);
    return;
}