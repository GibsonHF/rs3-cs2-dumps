//
function script9849(string0: string): void {
    IF_SETONTIMER(callback(script5800, (CLIENTCLOCK() + 216), CLIENTCLOCK()), comp(219, 1));  // bonds_gratz:firework_layer
    IF_SETHIDE(false, comp(219, 1));  // bonds_gratz:firework_layer
    IF_SETHIDE(false, comp(219, 146));  // bonds_gratz:namechange_layer
    IF_SETTEXT(string0, comp(219, 64));  // bonds_gratz:namechange_name
    script1558(varclient_2231, 0);
    return;
}