//[clientscript,meslayer_mode9]
function script110(string0: string): void {
    IF_SETHIDE(0, 96272384);
    IF_SETTEXT(string0, 96272387);
    varclient_5 = 9;
    if ((strcmp("null", varclient_2510) == 0)) {
        varclient_2510 = "";
    };
    if ((strcmp("", varclient_2510) != 0)) {
        script1564(varclient_2510);
        varclient_2510 = "";
    } else {
        script1564("");
    };
    if ((strcmp("null", varclient_2511) == 0)) {
        varclient_2511 = "";
    };
    IF_SETONCLICK(callback(), 96272385);
    script2026();
    if ((strcmp(varclient_2511, "") != 0)) {
        CC_CREATE(96272385, 4, 0);
        script2752();
        CC_SETTEXT(`Last entered: ${varclient_2511}`);
        CC_SETOP(1, "Use:");
        CC_SETOPBASE(`<col=ff9040>${REMOVETAGS(varclient_2511)}</col>`);
        CC_SETONOP(callback(script2753, varclient_5, -2147483644, -2147483645, -2147483643, varclient_2511));
        varclient_2511 = "";
    };
    return;
}