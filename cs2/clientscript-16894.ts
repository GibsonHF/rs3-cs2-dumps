//
function script16894(): void {
    var string0 = "With membership you will not only enjoy Fresh Start Worlds, you'll gain access to a whole host of exclusive perks and amazing members-only content:";
    if ((varbitplayer_51791 == 5)) {
        IF_SETTEXT("Fresh Start Worlds require membership", comp(1066, 10));
        IF_SETTEXT("Extend Membership", comp(1066, 17));
        IF_SETTEXT("Convert to Standard", comp(1066, 16));
        string0 = "To continue playing Fresh Start Worlds membership is required.<br><br>You can convert your account to the standard game, but you will no longer be able to access Fresh Start Worlds or amazing members-only content:";
    } else {
        IF_SETTEXT("Fresh Start Worlds is a special members' event", comp(1066, 10));
        IF_SETTEXT("Become a Member", comp(1066, 17));
        IF_SETTEXT("Go Back", comp(1066, 16));
    };
    IF_SETTEXT("", comp(1066, 13));
    var int0 = comp(1066, 12);
    var int1 = IF_GETWIDTH(int0);
    var int2 = script15891(string0, int1, 208 as fontmetrics, 0);
    var int3 = 20;
    var int4 = (int2 + int3);
    script15938(int0, 0, 0, 0, 0, 0, 0, 0, int2, 1, 0);
    script10507(int0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 2100 as dbrow, string0);
    int4 = script16897(int0, 1, int4, int1, "190+ extra quests", 21651 as graphic);
    int4 = script16897(int0, 2, int4, int1, "11 additional skills", 21651 as graphic);
    int4 = script16897(int0, 3, int4, int1, "40 awesome minigames", 21651 as graphic);
    int4 = script16897(int0, 4, int4, int1, "Access to both RuneScape and RuneScape Old School", 21651 as graphic);
    int4 = script16897(int0, 5, int4, int1, "...and much more!", 21651 as graphic);
    IF_SETHIDE(false, comp(1066, 18));
    script16930(comp(1066, 18), -1, 0, "A Fresh Start Worlds passcode can be obtained by redeeming a bond on another account, and will provide 14 days of membership upon redemption.<br><br>This is recommended for existing players.");
    return;
}