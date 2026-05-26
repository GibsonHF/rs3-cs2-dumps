//
function script511(): void {
    if ((varclient_51 > 170)) {
        varclient_51 = (varclient_51 - 1);
        IF_SETMODELANGLE(0, 0, 0, 0, 0, varclient_51, 39649280);
    } else {
        IF_SETMODEL(-1, 39649280);
    };
    return;
}