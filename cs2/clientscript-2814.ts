//
function script2814(): void {
    if ((varclient_1065 != -1 as coordgrid)) {
        script2815();
        IF_SETONVARCTRANSMIT(callback(), comp(89, 0));  // fade2:eventlayer
    } else {
        IF_SETONVARCTRANSMIT(callback(script2814, 1065, 1), comp(89, 0));  // fade2:eventlayer
    };
    return;
}