//
function script1055(int0: number): void {
    if ((CLIENTCLOCK() > int0)) {
        if ((varclient_3698 == 1)) {
            IF_SETONTIMER(callback(script8298), comp(1477, 922));  // toplevel_v2:tooltips_param_layer
        } else {
            IF_SETONTIMER(callback(), comp(1477, 922));  // toplevel_v2:tooltips_param_layer
        };
    };
    return;
}