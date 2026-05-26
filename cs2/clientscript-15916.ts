//
function script15916(): void {
    IF_SETHIDE(1, 98828295);
    IF_SETHIDE(1, 98828297);
    IF_SETCOLOUR(16777215, 98828290);
    varclient_4258 = 0;
    varclient_4259 = CLIENTCLOCK();
    script4172(varclient_4258);
    switch (varclient_5129) {
        case 999:
        case 2017:
        case 1000:
        case 1001: {
            IF_SETONTIMER(callback(script12251, CLIENTCLOCK(), varclient_5130), 98828290);
            break;
        }
        default: {
            IF_SETONTIMER(callback(script2959, CLIENTCLOCK()), 98828290);
            break;
        }
    };
    IF_SETONVARCTRANSMIT(callback(script801, 4258, 5129, 5130, 3), 98828290);
    IF_SETONVARCTRANSMIT(callback(script15917, 4260, 1), 98828292);
    return;
}