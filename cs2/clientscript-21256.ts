//
function script21256(): void {
    if ((IF_GETHIDE(comp(1322, 1)) == true)) {  // minimenu:clickout_and_blocking_layer ?
        IF_SETONTIMER(callback(), comp(1322, 1));  // minimenu:clickout_and_blocking_layer ?
        return;
    };
    stack(86638595);
    script21257();
    if (BRANCH_EQUALS(0)) {
        stack(86638594);
        script21257();
        if (BRANCH_EQUALS(0)) {
            script14228();
            MINIMENU_CLOSE();
        };
    };
    return;
}