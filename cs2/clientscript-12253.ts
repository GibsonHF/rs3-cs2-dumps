//
function script12253(): void {
    var int0 = comp(1724, 1);
    var int1 = IF_GETTRANS(int0);
    if ((int1 > 2)) {
        IF_SETTRANS((int1 - 2), int0);
    } else if ((int1 == 2)) {
        IF_SETTRANS(0, int0);
        IF_SETHIDE(false, comp(1724, 4));
        IF_SETHIDE(false, comp(1724, 6));
        IF_SETHIDE(false, comp(1724, 2));
        IF_SETONTIMER(callback(script12255, 112984071), comp(1724, 7));
        IF_SETONTIMER(callback(script12254, 112984070), 112984070);
    };
    return;
}