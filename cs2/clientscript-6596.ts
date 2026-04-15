//
function script6596(int0: int): void {
    var int1 = CLIENTCLOCK();
    var int2 = 0;
    if (((int1 >= (int0 + 200)) || (int0 == 0))) {
        var int0 = int1;
        script6598(comp(1326, 9), varclient_1994, 100);
        script6598(comp(1326, 35), varclient_1995, 100);
        script6598(comp(1326, 46), varclient_1996, 100);
        script6598(comp(1326, 57), varclient_1997, 100);
        script6598(comp(1326, 68), varclient_1998, 100);
        script6599(comp(1326, 3), varclient_1999, varclient_2000);
    };
    IF_SETONTIMER(callback(script6596, int0), comp(1326, 23));
    return;
}