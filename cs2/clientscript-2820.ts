//
function script2820(): void {
    if ((varclient_1065 != -1 as coordgrid)) {
        script2821();
        IF_SETONVARCTRANSMIT(callback(), comp(89, 0));
    } else {
        IF_SETONVARCTRANSMIT(callback(script2820, 1065, 1), comp(89, 0));
    };
    return;
}