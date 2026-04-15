//
function script20226(int0: component, int1: component, int2: int, int3: unknown_int, int4: int, int5: int): void {
    var int6 = 4;
    var int7 = 0;
    [int7, int6] = script19613(0, int7, int6, int2, "Nominate this account to receive your League rewards.");
    CC_SETTEXTALIGN(1, 1, 0);
    [int7, int6] = script19615(0, int7, int6, int2, "This RuneScape account will receive your Leagues progress.");
    [int7, int6] = script19617(0, int7, int6, int2, 0, "You will not be able to log into both Leagues and RuneScape at the same time.");
    if ((STRING_INDEXOF_STRING(CHAT_PLAYERNAME(), "#", 0) == -1)) {
        [int7, int6] = script19617(0, int7, int6, int2, 0, `You are currently logged in as '<col=FFFFFF>${CHAT_PLAYERNAME()}</col>'.`);
    } else {
        [int7, int6] = script19617(0, int7, int6, int2, 0, "You are currently logged in on an account without a display name.");
    };
    [int7, int6] = script19617(0, int7, int6, int2, 0, "League rewards from this account may not be transferred to any other account.");
    if ((int3 == 1)) {
        [int7, int6] = script19617(0, int7, int6, int2, 0, "You will have one final chance to confirm this decision.");
    };
    script19620(int0, int1, int6, comp(-1, 65535), -1, 0, int4, int5);
    return;
}