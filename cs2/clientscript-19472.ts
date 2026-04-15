//
function script19472(int0: int, int1: int): [int, int] {
    var int2 = 0;
    var [int0, int2] = script19615(0, int0, int2, int1, "All Ironman mode rules apply to Group Ironman mode. Rules within the Group Ironman ruleset override any conflicting rules from the Ironman mode ruleset.");
    [int0, int2] = script19613(0, int0, int2, int1, "Group Creation");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "New groups must be founded by two or more players who have chosen Group Ironman mode whilst on Iron Enclave.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "A group may not have the same name as another group or a clan.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Initial group members are known as 'founding members'.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "The group also has 'founder' status as long as it consists only of its founding members. Any players joining or leaving will invalidate group founder status.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "There is a 7 day grace period upon group creation where new members may be invited without losing founder status.");
    [int0, int2] = script19613(0, int0, int2, int1, "Changing Game Modes");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Existing Ironman mode players may choose to become a Group Ironman mode player, irrevocably renouncing their normal Ironman status.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "To leave the Group Ironman gamemode, players must renounce all Ironman statuses and then become a 'main', a normal player who plays with no special ruleset.");
    [int0, int2] = script19613(0, int0, int2, int1, "Leaving a Group");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Kicking a member");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Any player may initiate a vote to remove any other group member.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "All active members must vote 'Yes' for a kick to be applied.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "If a leader leaves, leader status will pass to the player who has been in the group the longest.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Group Ironman players may leave and join groups freely.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Players who join unranked groups may only join other unranked groups.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "All items and stats earned or given by the previous group are retained.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, `Joining a new group has a ${inttostring(14, 10)} day cooldown before being able to access group storage.`);
    [int0, int2] = script19613(0, int0, int2, int1, "Item Trading");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Players within a group in the Group Ironman gamemode may trade items marked as tradeable by the game to each other.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Players within a group may unlock and access 'Group Storage' which allows group members to store tradeable items and specific untradeable items which can be withdrawn by other members.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Item types that may be stored include:");
    [int0, int2] = script19616(0, int0, int2, int1, 2, 5977 as cs2enum);
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Items that progress quests will not be storable even if they fit in the above categories.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Storable items may not be player-to-player traded by group members even though they are storable.");
    [int0, int2] = script19613(0, int0, int2, int1, "Miscellaneous");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "All auras are automatically available for Group Ironman players to use. If you choose to downgrade your account in the future, any unowned auras will be locked and require purchasing to continue to use.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Any Group Ironman-specific achievements earned by group members do not contribute Runescore.");
    return [int0, int2];
}