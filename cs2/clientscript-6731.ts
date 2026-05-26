//
function script6731(int0: number, int1: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(1, 96797283);
        IF_SETHIDE(1, 96797285);
        IF_SETHIDE(1, 96797287);
        IF_SETHIDE(1, 96797289);
        if ((int1 == 1)) {
            printmessage("Buff timers will no longer be displayed.");
        };
        return;
    };
    IF_SETHIDE(0, 96797283);
    IF_SETHIDE(0, 96797285);
    IF_SETHIDE(0, 96797287);
    IF_SETHIDE(0, 96797289);
    if ((int1 == 1)) {
        printmessage("Buff timers will now be displayed.");
    };
    return;
}