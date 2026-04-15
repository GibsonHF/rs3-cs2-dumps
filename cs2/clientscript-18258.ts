//
function script18258(int0: unknown_int): void {
    stack(-1);
    stack(88014901);
    IF_SETGRAPHIC();
    stack(-1);
    stack(88014900);
    IF_SETGRAPHIC();
    IF_SETTEXT("", 88014893);
    IF_SETHIDE(1, 88014894);
    IF_SETHIDE(1, 88014895);
    IF_SETHIDE(1, 88014891);
    IF_SETHIDE(1, 88014904);
    IF_SETHIDE(1, 88014907);
    IF_SETHIDE(1, 88014928);
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