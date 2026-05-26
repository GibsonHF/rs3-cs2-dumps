//
function script9734(int0: number): void {
    if ((varclient_4190 == -1)) {
        IF_SETONTIMER(callback(), 61931531);
        return;
    };
    if ((MODULO(int0, 50) == 0)) {
        varclient_4190 = (varclient_4190 + 1);
        script9735();
    };
    IF_SETONTIMER(callback(script9734, (int0 + 1)), 61931531);
    return;
}