//
function script1194(): void {
    IF_SETTEXT("10:00", comp(1535, 10));  // elfcity_rush_of_blood_timer:green_large_progress_text
    script4542(100, 100597765, -1);
    varclient_4612 = 0;
    varclient_4613 = CLIENTCLOCK();
    script10595(varclient_4612);
    IF_SETONTIMER(callback(script10594, CLIENTCLOCK()), comp(1535, 10));  // elfcity_rush_of_blood_timer:green_large_progress_text
    IF_SETONVARCTRANSMIT(callback(script9552, 4612, 1), comp(1535, 10));  // elfcity_rush_of_blood_timer:green_large_progress_text
    return;
}