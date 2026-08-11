//
function script736(int0: number, int1: number): void {
    if ((int0 == 13)) {
        script14987(1);
        IF_CLOSESUBCLIENT(comp(1477, 921));  // toplevel_v2:map_loaded_tracker
        IF_SETONTIMER(callback(script1055, (CLIENTCLOCK() + 250)), comp(1477, 921));  // toplevel_v2:map_loaded_tracker
        if ((varclient_3698 == 1)) {
            MAP_LOADINGSCREEN_SETTRIGGERPERCENT(0, 0);
            MAP_LOADINGSCREEN_SETTRIGGERPERCENT(20, 90);
        };
    };
    return;
}