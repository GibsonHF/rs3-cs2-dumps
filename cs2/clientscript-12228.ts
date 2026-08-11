//
function script12228(int0: number, int1: number, int2: number): void {
    if (((int1 == 0) && (CLIENTCLOCK() < (varclient_1795 + 200)))) {
        return;
    };
    IF_SETONTIMER(callback(), comp(906, 16));  // lobbyscreen:subscribe_timer
    IF_SETONVARTRANSMIT(callback(script5951, 1751, 1), comp(906, 16));  // lobbyscreen:subscribe_timer
    script3097();
    if ((int2 == 1)) {
        if ((int0 == 1)) {
            script3093(10000, 4041, "Complete Transaction", "After you have completed your transaction, use the continue button to return to the game.", 10150, "", "Continue");
        } else {
            script3093(-3, 4041, "Complete Transaction", "Use the continue button when you have completed your transaction.", 10150, "", "Continue");
        };
    };
    return;
}