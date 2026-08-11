//
function script9734(int0: number): void {
    if ((varclient_4190 == -1)) {
        IF_SETONTIMER(callback(), comp(945, 11));  // rand_overlay:floor_timer
        return;
    };
    if ((MODULO(int0, 50) == 0)) {
        varclient_4190 = (varclient_4190 + 1);
        script9735();
    };
    IF_SETONTIMER(callback(script9734, (int0 + 1)), comp(945, 11));  // rand_overlay:floor_timer
    return;
}