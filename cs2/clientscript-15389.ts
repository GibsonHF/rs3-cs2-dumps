//
function script15389(): void {
    IF_SETONTIMER(callback(), 8978509);
    if ((varclient_6858 == 1)) {
        varclient_6858 = false;
    } else {
        varclient_6858 = true;
    };
    if ((script6431() == 1)) {
        script15893();
        if ((STRING_LENGTH(script8521(18)) == 0)) {
            script8516(18);
        };
        script1558(18, 0);
    } else {
        if ((varclient_6858 == false)) {
            script8517(18);
            return;
        };
        script8522(18, "");
        script8516(18);
    };
    return;
}