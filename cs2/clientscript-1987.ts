//
function script1987(): void {
    IF_SETTEXT("Select next map: 10s", 67960857);
    IF_SETCOLOUR(15458750, 67960857);
    IF_SETONTIMER(callback(script1988, (CLIENTCLOCK() + 500)), 67960857);
    return;
}