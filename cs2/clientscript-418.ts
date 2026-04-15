//[clientscript,conq_action_cam]
function script418(): void {
    if ((((varclient_1354 == -1 as coordgrid) || (varclient_1357 < 0)) || (varclient_1358 < 0))) {
        return;
    };
    CAM_FOLLOWCOORD(varclient_1354);
    varclient_1355 = CAM_GETANGLE_XA();
    varclient_1356 = CAM_GETANGLE_YA();
    IF_SETONTIMER(callback(script421, varclient_1357, varclient_1358, 0, 0), 66387968);
    return;
}