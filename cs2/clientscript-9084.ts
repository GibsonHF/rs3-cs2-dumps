//
function script9084(int0: number): void {
    if ((int0 == 1)) {
        varclient_2873 = 17;
        if ((varclient_2753 == 1)) {
            IF_SETONKEY(callback(script7664, -2147483640, -2147483639, -2147483645, 0), comp(1405, 12));  // bugreport_interface:input_text
            IF_SETONKEY(callback(), comp(1405, 26));  // bugreport_interface:input_repro
        } else {
            IF_SETONKEY(callback(script7664, -2147483640, -2147483639, -2147483645, 0), comp(1405, 26));  // bugreport_interface:input_repro
            IF_SETONKEY(callback(), comp(1405, 12));  // bugreport_interface:input_text
        };
    } else {
        if ((varclient_2873 == 17)) {
            varclient_2873 = 0;
        };
        IF_SETONKEY(callback(), comp(1405, 12));  // bugreport_interface:input_text
        IF_SETONKEY(callback(), comp(1405, 26));  // bugreport_interface:input_repro
        script1594();
    };
    return;
}