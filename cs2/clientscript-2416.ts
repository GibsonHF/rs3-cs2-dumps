//
function script2416(int0: component): void {
    if (((varclient_805 == 2) || (varclient_805 == 8))) {
        IF_SETOP(1, "Cut wire", int0);
    } else if (((varclient_805 == 3) || (varclient_805 == 9))) {
        IF_SETOP(1, "Replace wire", int0);
    } else if (((varclient_805 == 4) || (varclient_805 == 10))) {
        IF_SETOP(1, "Repair wire", int0);
    } else {
        IF_SETOP(1, "Inspect", int0);
    };
    return;
}