//
function script10153(int0: number): void {
    var int1 = 0;
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        IF_SETHIDE(false, comp(231, 6));
        IF_SETONTIMER(callback(), comp(231, 4));
        IF_SETHIDE(true, comp(231, 5));
        var int0 = (int0 - 1);
        if ((int0 >= 0)) {
            IF_SETONTIMER(callback(script10153, int0), comp(231, 4));
            IF_SETTEXT(inttostring(int0, 10), comp(231, 6));
        } else {
            IF_SETONTIMER(callback(), comp(231, 4));
            IF_SETTEXT("initialising", comp(231, 6));
            int1 = script3110();
            IF_SETHIDE(true, comp(231, 6));
            if ((int1 == 1)) {
                IF_SETONTIMER(callback(script10154), comp(231, 7));
                IF_SETHIDE(false, comp(231, 5));
                IF_SETTEXT("Stop Broadcast", comp(232, 150));
            } else {
                varbitclient_23079 = 0;
                IF_SETTEXT("Start Broadcast", comp(232, 150));
                IF_SETGRAPHIC(23641 as graphic, comp(231, 15));
            };
        };
    };
    return;
}