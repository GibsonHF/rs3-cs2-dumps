//
function script19474(int0: int, int1: int): [int, int] {
    var int2 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = script3381(8279);
    if ((script19316() == true)) {
        if ((script19320() == 1)) {
            string1 = "<col=FFFFFF>";
        } else {
            string0 = "<col=FFFFFF>";
        };
    };
    var [int0, int2] = script19615(0, int0, int2, int1, "You can downgrade your account to modes with fewer restrictions.");
    [int0, int2] = script19615(0, int0, int2, int1, "<col=EB2F2F>Warning:</col> Any downgrade is permanent.");
    [int0, int2] = script19613(0, int0, int2, int1, "Hardcore Ironman");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "May downgrade to Ironman mode.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "May downgrade to a regular account.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "To join Group Ironman, downgrade to Ironman mode first.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Unable to become Competitive Group Ironman.");
    [int0, int2] = script19613(0, int0, int2, int1, `Ironman - created before ${string2}`);
    [int0, int2] = script19617(0, int0, int2, int1, 0, "May downgrade to Unranked Group Ironman mode by creating or joining an unranked group.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Downgrade applies upon joining the group.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "May downgrade to a regular account, unless opted to never downgrade.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Unable to become Competitive Group Ironman or Regular Group Ironman.");
    [int0, int2] = script19613(0, int0, int2, int1, "Ironman");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "May downgrade to Unranked or Regular Group Ironman mode by creating or joining a group.");
    [int0, int2] = script19617(0, int0, int2, int1, 1, "Downgrade applies upon joining the group.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "May downgrade to a regular account, unless opted to never downgrade.");
    [int0, int2] = script19617(0, int0, int2, int1, 0, "Unable to become Competitive Group Ironman.");
    [int0, int2] = script19613(0, int0, int2, int1, "Competitive Group Ironman - after leaving a group:");
    [int0, int2] = script19617(0, int0, int2, int1, 0, `${string1}May downgrade to a Group Ironman.`);
    [int0, int2] = script19617(0, int0, int2, int1, 1, `${string1}May create another competitive group with new accounts.`);
    [int0, int2] = script19617(0, int0, int2, int1, 0, `${string1}May downgrade to a regular account.`);
    [int0, int2] = script19613(0, int0, int2, int1, "Group Ironman - after leaving a group:");
    [int0, int2] = script19617(0, int0, int2, int1, 0, `${string0}May join another Ironman group.`);
    [int0, int2] = script19617(0, int0, int2, int1, 0, `${string0}May downgrade to a regular account.`);
    return [int0, int2];
}