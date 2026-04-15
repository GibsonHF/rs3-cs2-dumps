//
function script16776(int0: int): void {
    var int1 = comp(1253, 0);
    var int0 = script12377(int0, 0, 300);
    if ((int0 <= 0)) {
        IF_SETONTIMER(callback(), int1);
        if ((varclient_1781 > 0)) {
            varclient_7075 = false;
            script6976();
            script6574(1);
        } else {
            script12478("Trh reward screen delay has run, but client vars are out of sync.");
            script1296("Sorry, something has gone wrong. Please close and re-open Treasure Hunter.");
        };
    } else {
        varclient_7075 = true;
        IF_SETONTIMER(callback(script16775, (int0 - 1)), int1);
    };
    return;
}