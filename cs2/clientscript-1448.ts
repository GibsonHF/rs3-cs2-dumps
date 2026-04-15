//
function script1448(int0: unknown_int, int1: component, int2: component, int3: component): void {
    if ((int0 == 1)) {
        if ((varclient_4143 <= 0)) {
            IF_SETHIDE(true, int2);
            IF_SETONTIMER(callback(), int1);
        } else {
            IF_SETHIDE(false, int2);
            IF_SETTEXT(inttostring((varclient_4143 / 50), 10), int3);
            varclient_4143 = (varclient_4143 - 1);
        };
    } else if ((int0 == 2)) {
        if ((varclient_4144 <= 0)) {
            IF_SETHIDE(true, int2);
            IF_SETONTIMER(callback(), int1);
        } else {
            IF_SETHIDE(false, int2);
            IF_SETTEXT(inttostring((varclient_4144 / 50), 10), int3);
            varclient_4144 = (varclient_4144 - 1);
        };
    };
    return;
}