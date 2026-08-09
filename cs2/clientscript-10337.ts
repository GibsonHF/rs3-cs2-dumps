//
function script10337(): void {
    var string0 = "Your group is registered for matchmaking.";
    var string1 = "Toggle matchmaking.";
    var int0 = 25862 as graphic;
    var int1 = 0;
    if ((IF_GETGRAPHIC(comp(1519, 37)) == int0)) {
        [int0, string0] = [25863 as graphic, "Your group is not registered for matchmaking."];
    };
    if ((PLAYER_GROUP_FIND() == 1)) {
        if ((varplayergroup_16 == 999999)) {
            [int1, int0, string0, string1] = [1, 21231 as graphic, "Open matchmaking interface.", "Open Grouping System"];
        };
        script10339(int0, string0, string1);
    };
    if (((int1 == 1) && (script8292(4, 4) == 0))) {
        script8287(4, 4);
    };
    return;
}