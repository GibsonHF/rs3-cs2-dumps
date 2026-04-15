//
function script2417(int0: component): void {
    if (((varclient_805 == 5) || (varclient_805 == 11))) {
        IF_SETOP(1, "Pump", int0);
    } else {
        IF_SETOP(1, "Inspect", int0);
    };
    return;
}