//
function script1535(): void {
    IF_SETHIDE(true, comp(18, 4));
    IF_SETSIZE(0, IF_GETHEIGHT(comp(18, 17)), 0, 0, comp(18, 17));
    IF_SETONTIMER(callback(script1536, CLIENTCLOCK()), comp(18, 16));
    return;
}