//
function script9190(): void {
    IF_SETTEXT("Total collapse in: 30", comp(312, 10));
    IF_SETCOLOUR(15458750, comp(312, 10));
    IF_SETONTIMER(callback(script9191, (CLIENTCLOCK() + 1500), -1), comp(312, 10));
    return;
}