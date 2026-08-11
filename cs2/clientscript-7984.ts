//
function script7984(int0: number): void {
    varclient_5067 = CLIENTCLOCK();
    varclient_5068 = (CLIENTCLOCK() + (int0 * 30));
    script4542(100, 4980741, 4980746);
    IF_SETONTIMER(callback(script7985), comp(76, 11));  // myq6_barricade_timer:title_layer
    return;
}