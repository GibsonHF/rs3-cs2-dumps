//
function script7991(): void {
    if ((HAS_NXT() == 0)) {
        return;
    };
    if (((varclient_2824 == 1) || (varclient_5208 == 1))) {
        return;
    };
    var int0 = script2581(33098 as struct);
    if ((int0 == 1)) {
        return;
    };
    IF_SETONTIMER(callback(script7992), comp(1477, 919));
    return;
}