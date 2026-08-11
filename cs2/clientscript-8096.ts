//
function script8096(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONKEY(callback(script4379, 72286236, 72286213, -2147483639, -2147483640, 72286237), comp(1103, 28));  // clan_motto_input:text_input
        IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 72286237), comp(1103, 28));  // clan_motto_input:text_input
    } else {
        IF_SETONKEY(callback(), comp(1103, 28));  // clan_motto_input:text_input
        IF_SETONTIMER(callback(), comp(1103, 28));  // clan_motto_input:text_input
    };
    return;
}