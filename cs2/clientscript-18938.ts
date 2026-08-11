//
function script18938(int0: number, int1: number, int2: number): void {
    IF_SETHIDE(int2, comp(566, 62));  // mtx58_wealth_evaluator:bank_tabs
    IF_SETHIDE(int2, comp(566, 23));  // mtx58_wealth_evaluator:scroll_layer
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(566, 24)), 1, 0, comp(566, 24));  // mtx58_wealth_evaluator:invs
    IF_SETSCROLLSIZE(0, int1, comp(566, 24));  // mtx58_wealth_evaluator:invs
    IF_SETSCROLLPOS(0, 0, comp(566, 23));  // mtx58_wealth_evaluator:scroll_layer
    if ((int2 == false)) {
        script7791(37093399, 37093400);
    };
    return;
}