//[clientscript,conq_action_cam_reset]
function script420(): void {
    CAM_FOLLOWCOORD(varclient_1353);
    IF_SETONTIMER(callback(script421, varclient_1355, varclient_1356, 0, 0), 66387968);
    return;
}