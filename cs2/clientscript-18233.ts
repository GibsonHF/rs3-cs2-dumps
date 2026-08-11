//
function script18233(int0: number): void {
    if ((MODULO(CLIENTCLOCK(), 250) == 0)) {
        if ((script8292(3, 3) == 1)) {
            script18234(int0);
        } else {
            IF_SETONTIMER(callback(), comp(1343, 209));  // jobs_main:weekly_progress_time_remaining_text
        };
    };
    return;
}