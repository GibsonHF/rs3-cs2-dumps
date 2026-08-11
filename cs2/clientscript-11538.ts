//
function script11538(int0: number, string0: string): void {
    IF_SETONOP(callback(), comp(891, 27));  // mtx_front_end_confirm:buy_button
    IF_SETHIDE(false, comp(891, 29));  // mtx_front_end_confirm:soft_currency_wrapper
    IF_SETGRAPHIC(int0, comp(891, 30));  // mtx_front_end_confirm:soft_currency_sprite
    IF_SETTEXT("", comp(891, 28));  // mtx_front_end_confirm:cash_buy_text
    IF_SETTEXT(string0, comp(891, 31));  // mtx_front_end_confirm:soft_currency_buy_text
    IF_SETSIZE((30 + PARAWIDTH(string0, 200, 173 as fontmetrics)), 0, 0, 1, comp(891, 29));  // mtx_front_end_confirm:soft_currency_wrapper
    return;
}