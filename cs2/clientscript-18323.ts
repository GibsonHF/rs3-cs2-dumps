//
function script18323(int0: number): void {
    if ((CLIENTCLOCK() >= int0)) {
        script18324();
        IF_SETONTIMER(callback(), comp(1181, 0));  // activity_progress_bar_extension:timer_delay
    };
    return;
}