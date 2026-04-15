//
function script19047(): void {
    IF_TRIGGEROP(comp(1253, 556), 0, 5);
    IF_SETONTIMER(callback(script19048, (CLIENTCLOCK() + 25), 1), comp(1014, 46));
    IF_SETONTIMER(callback(script19048, (CLIENTCLOCK() + 45), 2), 66453551);
    return;
}