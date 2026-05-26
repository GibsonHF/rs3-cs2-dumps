//
function script18258(int0: number): void {
    IF_SETGRAPHIC(-1 as graphic, comp(1343, 53));
    IF_SETGRAPHIC(-1 as graphic, comp(1343, 52));
    IF_SETTEXT("", comp(1343, 45));
    IF_SETHIDE(true, comp(1343, 46));
    IF_SETHIDE(true, comp(1343, 47));
    IF_SETHIDE(true, comp(1343, 43));
    IF_SETHIDE(true, comp(1343, 56));
    IF_SETHIDE(true, comp(1343, 59));
    IF_SETHIDE(true, comp(1343, 80));
    script18243();
    var string0 = "You have completed all available Daily Challenges.";
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1343, 80));
        IF_SETTEXT("Challenges Completed!", comp(1343, 42));
        if ((varbitplayer_52723 == 1)) {
            string0 = "You have completed all available Returner Challenges.";
        };
        IF_SETTEXT(`${string0}<br>Come back tomorrow for new tasks to complete!`, comp(1343, 117));
    } else if ((varplayer_3233 == 0)) {
        IF_SETHIDE(false, comp(1343, 80));
        IF_SETTEXT("Choose a Challenge", comp(1343, 42));
        if ((varbitplayer_52723 == 1)) {
            IF_SETTEXT("Select a returner challenge from the list on the left.", comp(1343, 117));
        } else {
            IF_SETTEXT("Select a daily challenge from the list on the left.", comp(1343, 117));
        };
    };
    return;
}