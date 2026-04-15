//[clientscript,lobby_worldswitcher_timer]
function script3115(): void {
    script2855();
    if ((WORLDLIST_FETCH() == 0)) {
        return;
    };
    IF_SETONTIMER(callback(script3114, (CLIENTCLOCK() + 500)), comp(910, 0));
    script20332();
    return;
}