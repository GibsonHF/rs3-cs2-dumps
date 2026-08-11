//
function script13878(): void {
    if ((varclient_3698 == 1)) {
        IF_SETONTIMER(callback(script8298), comp(1477, 921));  // toplevel_v2:map_loaded_tracker
        MAP_LOADINGSCREEN_SETTRIGGERPERCENT(20, 90);
    } else {
        IF_SETONTIMER(callback(), comp(1477, 921));  // toplevel_v2:map_loaded_tracker
        MAP_LOADINGSCREEN_SETTRIGGERPERCENT(0, 0);
    };
    return;
}