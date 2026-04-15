//
function script19469(int0: int, int1: int): [int, int] {
    var int2 = 0;
    var [int0, int2] = script19613(0, int0, int2, int1, "Ironman Modes");
    [int0, int2] = script19617(0, int0, int2, int1, 0, `Ironman Mode <img=11> (IM): Self-sufficient game mode, where most interactions with other players are blocked.`);
    [int0, int2] = script19617(0, int0, int2, int1, 0, `Hardcore Ironman Mode <img=13> (HCIM, HC): Ironman variant with limited lives. Losing all lives converts to Ironman mode.`);
    [int0, int2] = script19617(0, int0, int2, int1, 0, `Group Ironman Mode <img=16> (GIM): Allows up to 5 players to group together under Ironman restrictions.`);
    [int0, int2] = script19617(0, int0, int2, int1, 1, "An unranked variant exists which follows all GIM rules without hiscores.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, `Competitive Group Ironman Mode <img=17> (CGIM): Features a stricter GIM ruleset with greater limitations on moving between groups.`);
    [int0, int2] = script19613(0, int0, int2, int1, "Group Ironman Terms");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Founder status");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Individual: A player who created the group.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Group: Group contains only its individual founders - nobody has joined or left.");
    [int0, int2] = script19617(0, int0, int2, int1, 2, "There is a 7 day grace period upon group creation where new members may be invited without losing founder status.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Active members");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "If a player has not logged in for 28 days they are considered inactive.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "An inactive player is not counted towards group votes, unless they log in while a vote is in progress.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Storable Items");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "A term for untradeable items that may be shared with other group members via group storage.");
    return [int0, int2];
}