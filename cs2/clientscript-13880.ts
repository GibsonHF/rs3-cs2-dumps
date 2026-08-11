//
function script13880(): void {
    script14987(1);
    IF_CLOSESUBCLIENT(comp(1477, 921));  // toplevel_v2:map_loaded_tracker
    IF_SETONTIMER(callback(), comp(1477, 921));  // toplevel_v2:map_loaded_tracker
    MAP_LOADINGSCREEN_SETTRIGGERPERCENT(0, 0);
    varclient_3698 = 0;
    return;
}