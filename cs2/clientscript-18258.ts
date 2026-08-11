//
function script18258(int0: number): void {
    IF_SETGRAPHIC(-1 as graphic, comp(1343, 53));  // jobs_main:info_daily_stamp
    IF_SETGRAPHIC(-1 as graphic, comp(1343, 52));  // jobs_main:info_skill_icon
    IF_SETTEXT("", comp(1343, 45));  // jobs_main:job_name
    IF_SETHIDE(true, comp(1343, 46));  // jobs_main:pin_layer
    IF_SETHIDE(true, comp(1343, 47));  // jobs_main:tele_layer
    IF_SETHIDE(true, comp(1343, 43));  // jobs_main:objectives_layer
    IF_SETHIDE(true, comp(1343, 56));  // jobs_main:rewards_layer
    IF_SETHIDE(true, comp(1343, 59));  // jobs_main:buttons_layer
    IF_SETHIDE(true, comp(1343, 80));  // jobs_main:feedback_layer
    script18243();
    var string0 = "You have completed all available Daily Challenges.";
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1343, 80));  // jobs_main:feedback_layer
        IF_SETTEXT("Challenges Completed!", comp(1343, 42));  // jobs_main:feedback_heading
        if ((varbitplayer_52723 == 1)) {
            string0 = "You have completed all available Returner Challenges.";
        };
        IF_SETTEXT(`${string0}<br>Come back tomorrow for new tasks to complete!`, comp(1343, 117));  // jobs_main:feedback_description
    } else if ((varplayer_3233 == 0)) {
        IF_SETHIDE(false, comp(1343, 80));  // jobs_main:feedback_layer
        IF_SETTEXT("Choose a Challenge", comp(1343, 42));  // jobs_main:feedback_heading
        if ((varbitplayer_52723 == 1)) {
            IF_SETTEXT("Select a returner challenge from the list on the left.", comp(1343, 117));  // jobs_main:feedback_description
        } else {
            IF_SETTEXT("Select a daily challenge from the list on the left.", comp(1343, 117));  // jobs_main:feedback_description
        };
    };
    return;
}