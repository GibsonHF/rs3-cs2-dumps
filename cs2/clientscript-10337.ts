//
function script10337(): void {
    var string0 = "Your group is registered for matchmaking.";
    var string1 = "Toggle matchmaking.";
    var int0 = 25862;
    var int1 = 0;
    if ((IF_GETGRAPHIC(99549221) == int0)) {
        stack(25863);
        stack("Your group is not registered for matchmaking.");
        [int0, string0] = stack();
    };
    if ((PLAYER_GROUP_FIND() == 1)) {
        if ((varplayergroup_16 == 999999)) {
            stack(1);
            stack(21231);
            stack("Open matchmaking interface.");
            stack("Open Grouping System");
            [int1, int0, string0, string1] = stack();
        };
        script10339(int0, string0, string1);
    };
    if (((int1 == 1) && (script8292(4, 4) == 0))) {
        script8287(4, 4);
    };
    return;
}