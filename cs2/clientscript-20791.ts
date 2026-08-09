//
function script20791(int0: number): void {
    var int1 = (24 + 4);
    script7939(int0, 0, 0, 0, 0, 0, (int1 + 4), 24, 1, 0, 17465);
    stack("Search...");
    stack(-1701144064);
    stack(255);
    unk11185();
    CC_SETTEXT(varclient_8426);
    stack(20800);
    stack(-2147483645);
    stack(-2147483643);
    stack("event_text");
    stack(-2147483647);
    stack("iisi");
    unk11186();
    CC_SETENABLED(true);
    if ((STRING_LENGTH(varclient_8426) > 0)) {
        varclient_8421 = int0;
        varclient_8422 = 0;
    };
    script7852(int0, 1, 0, 0, 2, 0, 24, 24, 0, 0, callback(script4476));
    CC_SETONBUTTONCLICK(callback(script20792, -2147483645, -2147483643));
    script2994(int0, 2, 0, 0, 2, 0, 24, 24, 0, 0, 24449);
    CC_SETOP(1, "Open");
    return;
}