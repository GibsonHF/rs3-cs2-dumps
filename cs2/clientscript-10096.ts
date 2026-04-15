//
function script10096(): void {
    if ((varclient_4280 == 1)) {
        IF_SETONTIMER(callback(script10097, 75), comp(1515, 12));
    } else {
        IF_SETONTIMER(callback(script10097, 255), comp(1515, 12));
    };
    return;
}