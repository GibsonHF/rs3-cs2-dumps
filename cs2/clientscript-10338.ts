//
function script10338(): void {
    var string0 = "Open matchmaking interface.";
    var string1 = "Open Grouping System";
    var int0 = 21231 as graphic;
    if ((varplayergroup_16 != 999999)) {
        if ((varplayergroup_17 == 0)) {
            stack(25863 as graphic);
            stack("Your group is not registered for matchmaking.");
            stack("Toggle Matchmaking");
            [int0, string0, string1] = stack();
        } else {
            stack(25862 as graphic);
            stack("Your group is registered for matchmaking.");
            stack("Toggle Matchmaking");
            [int0, string0, string1] = stack();
        };
    };
    script10339(int0, string0, string1);
    return;
}