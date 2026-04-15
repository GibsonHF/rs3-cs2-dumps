//
function script7516(): void {
    IF_SETTEXT("0", comp(1391, 12));
    IF_SETTEXT("-", comp(1391, 11));
    var string0 = "";
    var string1 = "";
    if ((strcmp(varclient_2704, "") == 0)) {
        string0 = "Resource";
    } else {
        string0 = varclient_2704;
    };
    string1 = `${string0} - Collect ${LOWERCASE(string0)} you find within the sinkhole.`;
    IF_SETTEXT(string0, comp(1391, 18));
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 91160602);
    IF_SETONMOUSELEAVE(callback(script8805), 91160602);
    IF_SETOBJECT(27318, -1, 91160603);
    IF_SETOBJECT(27317, -1, 91160604);
    IF_SETHIDE(1, 91160591);
    IF_SETHIDE(1, 91160592);
    IF_SETHIDE(1, 91160593);
    return;
}