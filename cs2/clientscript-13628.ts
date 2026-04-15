//
function script13628(int0: component): void {
    var string0 = "";
    if ((STRING_LENGTH(varclient_6275) != 0)) {
        string0 = varclient_6275;
    };
    if ((STRING_LENGTH(varclient_6276) != 0)) {
        string0 = `${string0}<br><br>${varclient_6276}`;
    };
    if ((STRING_LENGTH(string0) == 0)) {
        IF_SETHIDE(true, int0);
        return;
    };
    IF_SETHIDE(false, int0);
    IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
    varclient_6275 = "";
    varclient_6276 = "";
    return;
}