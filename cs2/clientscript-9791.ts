//
function script9791(int0: number): void {
    if ((int0 == 5)) {
        IF_SETONTIMER(callback(), comp(744, 1));
        IF_SETONOP(callback(script3377, 0), comp(744, 1));
        IF_SETOP(1, "Close", comp(744, 1));
    } else {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script9791, int0), comp(744, 1));
    };
    return;
}