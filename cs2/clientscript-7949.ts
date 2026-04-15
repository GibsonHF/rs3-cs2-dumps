//
function script7949(): void {
    if ((varclient_3521 == varclient_3522)) {
        return;
    };
    if ((varclient_3521 < varclient_3522)) {
        varclient_3521 = MIN(varclient_3522, (varclient_3521 + varclient_3523));
    } else if ((varclient_3521 > varclient_3522)) {
        varclient_3521 = MAX(varclient_3522, (varclient_3521 - varclient_3523));
    };
    script7952();
    return;
}