//
function script13879(): void {
    stack(varclient_6344);
    varclient_6344 = (varclient_6344 + 1);
    if (BRANCH_GREATER_THAN_OR_EQUALS(20)) {
        if ((MAP_LOADEDPERCENT() < 60)) {
            if ((MAP_LOADINGSCREEN_ISOPEN() == 1)) {
                if ((varclient_6564 <= CLIENTCLOCK())) {
                    if ((script14160() == 1)) {
                        script14175();
                    };
                    script14987(0);
                    IF_OPENSUBCLIENT(comp(1477, 921), 1921);  // toplevel_v2:map_loaded_tracker
                    IF_SETONKEY(callback(script736, -2147483640, -2147483639), comp(1921, 1));  // loading_screen:loading_rect
                    IF_SETONTIMER(callback(script8300, 0), comp(1477, 921));  // toplevel_v2:map_loaded_tracker
                    script19667();
                } else {
                    IF_SETONTIMER(callback(script8298), comp(1477, 921));  // toplevel_v2:map_loaded_tracker
                    script6556(5);
                };
            } else {
                IF_SETONTIMER(callback(script8298), comp(1477, 921));  // toplevel_v2:map_loaded_tracker
                script6556(5);
            };
        } else {
            IF_SETONTIMER(callback(script8298), comp(1477, 921));  // toplevel_v2:map_loaded_tracker
            script6556(5);
        };
    };
    return;
}