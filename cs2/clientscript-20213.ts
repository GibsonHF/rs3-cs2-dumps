//
function script20213(): void {
    IF_SETPARAM_INT(8058, 1, comp(1401, 3));  // league_onboarding:anim_listener
    IF_SETONTIMER(callback(script20214, CLIENTCLOCK()), comp(1401, 3));  // league_onboarding:anim_listener
    return;
}