//
function script17543(int0: number): void {
    IF_SETHIDE(true, script18321(int0, 76742673));
    IF_SETHIDE(true, script18321(int0, 76742668));
    IF_SETTRANS(255, script18321(int0, 76742675));
    IF_SETTRANS(255, script18321(int0, 76742665));
    IF_SETTRANS(255, script18321(int0, 76742676));
    IF_SETTRANS(255, script18321(int0, 76742678));
    IF_SETTRANS(255, script18321(int0, 76742677));
    IF_SETTRANS(255, script18321(int0, 76742661));
    IF_SETTRANS(255, script18321(int0, 76742670));
    IF_SETTRANS(255, script18321(int0, 76742681));
    IF_SETTRANS(255, script18321(int0, 76742663));
    IF_SETTRANS(255, script18321(int0, 76742664));
    IF_SETTRANS(255, script18321(int0, 76742662));
    IF_SETTRANS(255, script18321(int0, 76742682));
    if ((varplayer_10946 != -1 as struct)) {
        IF_SETONVARTRANSMIT(callback(script17545, int0, 10937, 10938, 10939, 10940, 10941, 10942, 10943, 11535, 11536, 9), script18321(int0, 76742678));
        IF_SETONTIMER(callback(script17545, int0), script18321(int0, 76742678));
    };
    IF_SETONTIMER(callback(script17544, int0, CLIENTCLOCK()), int0);
    return;
}