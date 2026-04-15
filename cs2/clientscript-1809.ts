//
function script1809(int0: unknown_int, int1: component, int2: component): void {
    var string0 = "";
    if ((STRING_LENGTH(varclient_2409) > 0)) {
        string0 = script1814(varclient_2409);
        IF_SETTEXT(string0, int1);
        IF_SETSIZE(PARAWIDTH(string0, 512, 69 as fontmetrics), 15, 0, 0, int1);
    } else {
        IF_SETTEXT("", int1);
        IF_SETSIZE(0, 15, 0, 0, int1);
    };
    varclient_267 = -1;
    varclient_2410 = "";
    script1811(int0, int1, int2);
    return;
}