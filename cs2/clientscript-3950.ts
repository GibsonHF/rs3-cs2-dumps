//
function script3950(): void {
    IF_SETHIDE(true, comp(200, 28));  // sep2013_jobs:todays_challenge_layer
    IF_SETHIDE(false, comp(200, 33));  // sep2013_jobs:rewards_layer
    IF_SETONMOUSEREPEAT(callback(), comp(200, 17));  // sep2013_jobs:rewards_button
    IF_SETONMOUSELEAVE(callback(), comp(200, 17));  // sep2013_jobs:rewards_button
    return;
}