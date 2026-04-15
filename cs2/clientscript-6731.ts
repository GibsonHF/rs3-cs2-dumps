//
function script6731(int0: unknown_int, int1: unknown_int): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1477, 611));
        IF_SETHIDE(true, comp(1477, 613));
        IF_SETHIDE(true, comp(1477, 615));
        IF_SETHIDE(true, comp(1477, 617));
        if ((int1 == 1)) {
            printmessage("Buff timers will no longer be displayed.");
        };
        return;
    };
    IF_SETHIDE(false, comp(1477, 611));
    IF_SETHIDE(false, comp(1477, 613));
    IF_SETHIDE(false, comp(1477, 615));
    IF_SETHIDE(false, comp(1477, 617));
    if ((int1 == 1)) {
        printmessage("Buff timers will now be displayed.");
    };
    return;
}