//
function script15064(): void {
    IF_OPENSUBCLIENT(comp(276, 15), 280);
    IF_SETSIZE(IF_GETWIDTH(comp(280, 0)), IF_GETHEIGHT(comp(280, 0)), 0, 0, comp(276, 15));
    script15066();
    IF_SETONTIMER(callback(script10531), comp(280, 1));
    return;
}