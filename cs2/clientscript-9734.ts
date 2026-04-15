//
function script9734(int0: int): void {
    if ((varclient_4190 == -1)) {
        IF_SETONTIMER(callback(), comp(945, 26));
        return;
    };
    if ((MODULO(int0, 50) == 0)) {
        varclient_4190 = (varclient_4190 + 1);
        script9735();
    };
    IF_SETONTIMER(callback(script9734, (int0 + 1)), comp(945, 26));
    return;
}