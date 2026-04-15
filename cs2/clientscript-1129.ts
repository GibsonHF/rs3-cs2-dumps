//[proc,cursors_login]
function script1129(): void {
    if ((script13749() == true)) {
        SETDEFAULTCURSORS(-1, -1);
        SETHARDCODEDOPCURSORS(-1, -1);
        CLIENTOPTION_SET(6, 0);
    } else {
        script3123();
        SETHARDCODEDOPCURSORS(46, -1);
        if (((varclient_987 == false) || (varclient_987 == true))) {
            CLIENTOPTION_SET(6, script42(varclient_987));
        } else {
            varclient_987 = true;
            CLIENTOPTION_SET(6, 1);
        };
    };
    return;
}