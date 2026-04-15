//
function script7945(): void {
    if ((CAM2_GETPOSITIONMODE() == 1)) {
        [varclient_3528, varclient_3529] = CAM2_GETPOSITIONENTITY_ANGLEOFFSETS();
    } else {
        varclient_3528 = 0;
        varclient_3529 = (16284 / 2);
    };
    return;
}