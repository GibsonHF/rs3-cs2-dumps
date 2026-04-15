//
function script15247(): void {
    if ((PLATFORMTYPE() != 1)) {
        return;
    };
    if ((SSO_AVAILABLE() == 1)) {
        script15251(1);
    } else if ((script15248() == 1)) {
        script15271(0, 0);
    } else {
        varclient_6818 = 0;
        script15250();
        script15273();
    };
    return;
}