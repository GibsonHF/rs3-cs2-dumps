//
function script602(): void {
    if ((varclient_82 <= 0)) {
        varclient_82 = 100;
    } else {
        varclient_82 = MIN(100, (varclient_82 + 10));
    };
    IF_SETONTIMER(callback(script603), comp(105, 237));
    return;
}