//
function script516(): void {
    if ((varclient_52 < 300)) {
        varclient_52 = (varclient_52 + 1);
    };
    if (((varclient_51 > 0) && (MODULO(varclient_52, 3) == 0))) {
        varclient_51 = (varclient_51 - 3);
        varclient_50 = (varclient_50 + 1);
        IF_SETMODELANGLE(0, varclient_50, 0, 0, 0, varclient_51, comp(615, 2));
    };
    return;
}