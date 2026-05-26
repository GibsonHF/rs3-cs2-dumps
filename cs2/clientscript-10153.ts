//
function script10153(int0: number): void {
    var int1 = 0;
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        IF_SETHIDE(0, 15138822);
        IF_SETONTIMER(callback(), 15138820);
        IF_SETHIDE(1, 15138821);
        if ((--int0 >= 0)) {
            IF_SETONTIMER(callback(script10153, int0), 15138820);
            IF_SETTEXT(inttostring(int0, 10), 15138822);
        } else {
            IF_SETONTIMER(callback(), 15138820);
            IF_SETTEXT("initialising", 15138822);
            int1 = script3110();
            IF_SETHIDE(1, 15138822);
            if ((int1 == 1)) {
                IF_SETONTIMER(callback(script10154), 15138823);
                IF_SETHIDE(0, 15138821);
                IF_SETTEXT("Stop Broadcast", 15204502);
            } else {
                varbitclient_23079 = 0;
                IF_SETTEXT("Start Broadcast", 15204502);
                IF_SETGRAPHIC(23641, 15138831);
            };
        };
    };
    return;
}