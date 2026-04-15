//
function script609(): void {
    if ((varclient_83 <= 0)) {
        varclient_83 = 100;
    } else {
        varclient_83 = MIN(100, (varclient_83 + 10));
    };
    IF_SETONTIMER(callback(script610), comp(105, 278));
    return;
}