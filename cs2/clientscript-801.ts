//
function script801(): void {
    switch (varclient_5129) {
        case 999:
        case 2017:
        case 1000:
        case 1001: {
            script12252(varclient_5130, varclient_5130);
            IF_SETONTIMER(callback(script12251, CLIENTCLOCK(), varclient_5130), comp(1508, 2));
            break;
        }
        default: {
            script4172(varclient_4258);
            IF_SETONTIMER(callback(script2959, CLIENTCLOCK()), comp(1508, 2));
            break;
        }
    };
    return;
}