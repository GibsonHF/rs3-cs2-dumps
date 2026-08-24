//
function script11653(int0: number): number {
    var int0 = 0;
    var int1 = 4;
    var int2 = 0;
    if ((IF_FIND(comp(1442, 28)) == 1)) {
        int0 = CC_GETWIDTH();
        [int2, int1] = script19613(0, int2, int1, int0, "Nominate a <col=FFFFFF>DIFFERENT</col> account to receive your League rewards for this league onwards.");
        CC_SETTEXTALIGN(1, 1, 0);
        [int2, int1] = script19615(0, int2, int1, int0, "You may ONLY do this ONCE per league.");
        if ((STRING_LENGTH(varclient_8331) == 0)) {
            [int2, int1] = script19615(0, int2, int1, int0, `Current nominated account name was '<col=FFFFFF>${CHAT_PLAYERNAME_UNFILTERED()}</col>'.`);
            IF_SETTEXT(CHAT_PLAYERNAME_UNFILTERED(), comp(1442, 29));
        } else {
            [int2, int1] = script19615(0, int2, int1, int0, `Current nominated account name was '<col=FFFFFF>${varclient_8331}</col>'.`);
            IF_SETTEXT(varclient_8331, 94502941);
        };
        [int2, int1] = script19615(0, int2, int1, int0, "You will NOT be able to claim previous league points from this account after doing this.");
        [int2, int1] = script19615(0, int2, int1, int0, "Enter the display name of the account you wish to import rewards to for THIS league onwards.");
    };
    stack(94502944);
    return script15760(94502945);
}