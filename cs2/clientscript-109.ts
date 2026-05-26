//[clientscript,meslayer_mode8]
function script109(string0: string): void {
    IF_SETHIDE(0, 96272384);
    IF_SETTEXT(string0, 96272387);
    varclient_5 = 8;
    script1564("");
    IF_SETONCLICK(callback(), 96272385);
    script2026();
    if (((varclient_1026 == 1) && (STRING_LENGTH(varclient_2507) > 0))) {
        CC_CREATE(96272385, 4, 0);
        script2752();
        CC_SETTEXT(`Last name entered: ${varclient_2507} ${script9465(10)}`);
        CC_SETOP(1, "Use:");
        CC_SETOPBASE(`<col=ff9040>${REMOVETAGS(varclient_2507)}</col>`);
        CC_SETONOP(callback(script2753, varclient_5, -2147483644, -2147483645, -2147483643, varclient_2507));
    } else {
        varclient_2507 = "";
        varclient_1026 = true;
    };
    return;
}