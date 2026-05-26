//
function script1987(): void {
    IF_SETTEXT("Select next map: 10s", comp(1037, 25));
    IF_SETCOLOUR(15458750, comp(1037, 25));
    IF_SETONTIMER(callback(script1988, (CLIENTCLOCK() + 500)), comp(1037, 25));
    return;
}