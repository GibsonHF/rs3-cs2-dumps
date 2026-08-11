//
function script745(int0: number, int1: number, int2: number): void {
    var string0 = inttostring(int0, 10);
    var string1 = inttostring(int1, 10);
    var int3 = comp(17, 9);  // tuska_hub_overlay:time_text
    var int4 = comp(17, 7);  // tuska_hub_overlay:time_panel
    if ((int2 == 0)) {
        int3 = comp(1630, 205);  // tuska_world_event_info:time_text
        int4 = comp(1630, 46);  // tuska_world_event_info:time_panel
    };
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        var int1 = (int1 - 1);
        if ((int1 < 0)) {
            int1 = 59;
            var int0 = MAX(0, (int0 - 1));
        };
        string0 = inttostring(int0, 10);
        string1 = inttostring(int1, 10);
        if ((int1 < 10)) {
            string1 = `0${inttostring(int1, 10)}`;
        };
        if ((int0 < 10)) {
            string0 = `0${inttostring(int0, 10)}`;
        };
        IF_SETTEXT(`${string0}:${string1}`, int3);
        IF_SETONTIMER(callback(script745, int0, int1, int2), int3);
        if (((int1 == 0) && (int0 == 0))) {
            IF_SETPOSITION(0, 35, 1, 0, int4);
            IF_SETONTIMER(callback(), int3);
            IF_SENDTOBACK(comp(17, 7));  // tuska_hub_overlay:time_panel
            IF_SENDTOBACK(comp(1630, 46));  // tuska_world_event_info:time_panel
            IF_SETHIDE(true, comp(17, 7));  // tuska_hub_overlay:time_panel
        };
    };
    return;
}