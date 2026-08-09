//
function script10338(): void {
    var string0 = "Open matchmaking interface.";
    var string1 = "Open Grouping System";
    var int0 = 21231;
    if ((varplayergroup_16 != 999999)) {
        if ((varplayergroup_17 == 0)) {
            [int0, string0, string1] = [25863, "Your group is not registered for matchmaking.", "Toggle Matchmaking"];
        } else {
            [int0, string0, string1] = [25862, "Your group is registered for matchmaking.", "Toggle Matchmaking"];
        };
    };
    script10339(int0, string0, string1);
    return;
}