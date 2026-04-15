//
function script7173(int0: int, string0: string): void {
    if ((varclient_2234 == false)) {
        varclient_2234 = false;
    };
    if ((varclient_2234 == false)) {
        script7177();
        if ((strcmp(LOWERCASE(string0), "[subtitles_load]") == 0)) {
            return;
        };
        if ((strcmp(LOWERCASE(string0), "[subtitles_close]") == 0)) {
            script7178();
        } else if ((strcmp(LOWERCASE(string0), "[subtitles_hide]") == 0)) {
            script7176();
        } else if ((strcmp(LOWERCASE(string0), "[subtitles_mode_noeffects]") == 0)) {
            varclient_2233 = 1;
        } else if ((strcmp(LOWERCASE(string0), "[subtitles_mode_typein]") == 0)) {
            varclient_2233 = 2;
        } else if ((strcmp(LOWERCASE(string0), "[subtitles_mode_typein_dropshadow]") == 0)) {
            varclient_2233 = 3;
        } else if ((strcmp(LOWERCASE(string0), "[subtitles_mode_fadein]") == 0)) {
            varclient_2233 = 4;
        } else if ((strcmp(LOWERCASE(string0), "[subtitles_mode_fadein_dropshadow]") == 0)) {
            varclient_2233 = 5;
        } else if ((strcmp(LOWERCASE(string0), "[subtitles_mode_dropshadow]") == 0)) {
            varclient_2233 = 6;
        } else {
            script7174(1, 2, string0, int0);
        };
    };
    return;
}