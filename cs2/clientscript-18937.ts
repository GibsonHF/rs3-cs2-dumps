//
function script18937(int0: number, int1: number): void {
    IF_SETHIDE(script12585(IF_GETHIDE(int0)), int0);
    IF_SETHIDE(script12585(IF_GETHIDE(int1)), int1);
    if ((IF_GETHIDE(int1) == false)) {
        script18938(16, 924, 0);
        IF_SETOP(1, "Close", comp(566, 95));  // mtx58_wealth_evaluator:bank_tab_toggle_layer
    } else {
        script18938(0, 0, 1);
        IF_SETOP(1, "Expand", comp(566, 95));  // mtx58_wealth_evaluator:bank_tab_toggle_layer
    };
    return;
}