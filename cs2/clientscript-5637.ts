//
function script5637(int0: number, int1: number): void {
    IF_SETONTIMER(callback(script5800, (CLIENTCLOCK() + 216), CLIENTCLOCK()), comp(219, 1));  // bonds_gratz:firework_layer
    IF_SETHIDE(false, comp(219, 1));  // bonds_gratz:firework_layer
    IF_SETONVARCTRANSMIT(callback(), comp(219, 16));  // bonds_gratz:mems_text_02
    var int3 = script13494(int0);
    if ((int3 == -1)) {
        script13463("Sorry, we were unable to process your request. Please try again later.");
        return;
    };
    stack(int3);
    script14486(int1, int2);
    return;
}