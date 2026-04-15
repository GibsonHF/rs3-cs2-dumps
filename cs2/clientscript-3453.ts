//
function script3453(): void {
    if ((varclient_1281 == 8)) {
        return;
    };
    if ((varclient_1074 == 0)) {
        script3454((varclient_1281 + 1), varclient_1070, varclient_1069, script2865(varclient_1070, varclient_1071), varclient_1073);
    } else if ((varclient_1074 == 1)) {
        script3454((varclient_1281 + 1), varclient_1070, varclient_1069, varclient_1072, 50);
    } else {
        return;
    };
    varclient_1281 = (varclient_1281 + 1);
    IF_SETTEXT(inttostring(varclient_1281, 10), comp(475, 22));
    return;
}