//
function script19473(int0: int, int1: int): [int, int] {
    var int2 = 0;
    var [int0, int2] = script19615(0, int0, int2, int1, "All Ironman mode and Group Ironman mode rules apply to Competitive Group Ironman mode. Rules within the Competitive Group Ironman ruleset override any conflicting rules from the Ironman and Group Ironman mode rulesets.");
    [int0, int2] = script19613(0, int0, int2, int1, "Group Creation");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Only valid accounts can create a CGIM group.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Accounts which complete or skip the initial game tutorial following the Group Ironman game update; hereby known as 'fresh accounts'.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Accounts which have left a CGIM group may create a new group with only fresh accounts.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "If a CGIM group has a vacancy, it may only be filled by fresh accounts.");
    [int0, int2] = script19613(0, int0, int2, int1, "Changing Game Modes");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "If you want to leave your current Group, or are subsequently removed, there are only three options available to you.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Creating a new CGIM group with fresh accounts.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Joining an existing GIM group - this will convert you from CGIM to GIM.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Converting to a regular account.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "No items or stats are lost during this process.");
    [int0, int2] = script19613(0, int0, int2, int1, "Player Interaction");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "CGIM players are restricted from interacting with other players.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "CGIM group members must deal 100% of damage to obtain drops.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Minigames and D&Ds which can not be accessed:");
    [int0, int2] = script19616(0, int0, int2, int1, 2, 5978 as cs2enum);
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Other content may only be used with members of your own group:");
    [int0, int2] = script19616(0, int0, int2, int1, 2, 5979 as cs2enum);
    return [int0, int2];
}