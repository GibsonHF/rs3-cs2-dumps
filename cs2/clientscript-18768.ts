//
function script18768(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    switch (int0) {
        case 1: {
            int1 = 30;
            int2 = (30 / 2);
            break;
        }
        case 2: {
            int1 = (30 / 2);
            int2 = 30;
            script18772("Cancelled");
            script18773(12632256);
            break;
        }
        case 3: {
            int1 = (2 * 30);
            int2 = 30;
            script18772("Interrupted");
            script18773(16724016);
            break;
        }
        case 4: {
            int1 = 30;
            int2 = (30 / 2);
            script18772("Finished");
            break;
        }
    };
    if ((((int0 == 2) || (int0 == 3)) || (int0 == 4))) {
        IF_SETONTIMER(callback(), comp(764, 9));
        script18777();
    };
    varclient_7414 = (CLIENTCLOCK() + int1);
    IF_SETONTIMER(callback(script18769, -2147483645, int0, MAX(1, int2)), 50069504);
    return;
}