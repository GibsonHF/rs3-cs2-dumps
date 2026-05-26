//
function script12253(): void {
    var int0 = 112984065;
    var int1 = IF_GETTRANS(int0);
    if ((int1 > 2)) {
        IF_SETTRANS((int1 - 2), int0);
    } else if ((int1 == 2)) {
        IF_SETTRANS(0, int0);
        IF_SETHIDE(0, 112984068);
        IF_SETHIDE(0, 112984070);
        IF_SETHIDE(0, 112984066);
        IF_SETONTIMER(callback(script12255, 112984071), 112984071);
        IF_SETONTIMER(callback(script12254, 112984070), 112984070);
    };
    return;
}