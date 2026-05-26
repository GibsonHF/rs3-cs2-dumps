//
function script15725(): void {
    var int0 = SHOP_REQUESTDATASTATUS();
    if ((int0 <= 0)) {
        return;
    };
    var int1 = comp(828, 3);
    IF_SETONTIMER(callback(), int1);
    CC_DELETEALL(int1);
    if ((int0 == 2)) {
        CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETTEXTFONT(28 as fontmetrics);
        CC_SETTEXT("The shop is currently not available.<br>Please try again later");
        CC_SETCOLOUR(script693(255, 0, 0));
        CC_SETTEXTALIGN(1, 1, 0);
        return;
    };
    script15727(varclient_6892);
    return;
}