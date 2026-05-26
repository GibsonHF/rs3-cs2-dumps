//
function script9791(int0: number): void {
    if ((int0 == 5)) {
        IF_SETONTIMER(callback(), 48758785);
        IF_SETONOP(callback(script3377, 0), 48758785);
        IF_SETOP(1, "Close", 48758785);
    } else {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script9791, int0), 48758785);
    };
    return;
}