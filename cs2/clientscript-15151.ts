//
function script15151(int0: number, int1: number): void {
    if ((int0 == 0)) {
        var int1 = script12585(IF_GETHIDE(42795020));
    };
    IF_SETHIDE(int1, 42795020);
    if ((int1 == 1)) {
        IF_SETOP(1, "Open info panel", 42795077);
    } else {
        IF_SETOP(1, "Close info panel", 42795077);
        script15158(-1);
    };
    return;
}