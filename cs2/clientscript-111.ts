//[proc,meslayer_mode10]
function script111(): void {
    IF_SETHIDE(false, comp(1469, 0));
    if ((varclient_1413 == false)) {
        return;
    };
    if ((varclient_11 == true)) {
        script675();
    };
    IF_SETTEXT("Enter the player name whose channel you wish to join:", comp(1469, 3));
    varclient_5 = 10;
    script1564("");
    IF_SETONCLICK(callback(), comp(1469, 1));
    script2026();
    CC_CREATE(96272385, 4, 0);
    script2752();
    if (((varclient_1027 == 1) && (STRING_LENGTH(varclient_2508) > 0))) {
        CC_SETTEXT(`Last name entered: ${varclient_2508} ${script9465(10)}`);
    } else {
        varclient_2508 = REMOVETAGS(CHAT_PLAYERNAME());
        varclient_1027 = true;
        CC_SETTEXT(`Your name: ${varclient_2508}`);
    };
    CC_SETOP(1, "Use:");
    CC_SETOPBASE(`<col=ff9040>${REMOVETAGS(varclient_2508)}</col>`);
    CC_SETONOP(callback(script2753, varclient_5, -2147483644, -2147483645, -2147483643, varclient_2508));
    return;
}