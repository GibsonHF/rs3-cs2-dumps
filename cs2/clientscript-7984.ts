//
function script7984(int0: int): void {
    varclient_5067 = CLIENTCLOCK();
    varclient_5068 = (CLIENTCLOCK() + (int0 * 30));
    script4542(100, comp(76, 5), comp(76, 10));
    IF_SETONTIMER(callback(script7985), comp(76, 11));
    return;
}