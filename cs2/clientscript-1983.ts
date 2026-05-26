//
function script1983(int0: number): void {
    var int0 = MAX(0, MIN(int0, 1));
    SOUND_VORBIS_VOLUME(14378, 1, 0, 255);
    varclient_1184 = int0;
    if ((int0 == 0)) {
        IF_SETHIDE(1, 67829989);
        IF_SETHIDE(1, 67829762);
        IF_SETHIDE(0, 67829982);
        IF_SETHIDE(0, 67829761);
        IF_SETTEXT(`Wins: ${inttostring(varbitplayer_21659, 10)}    Reward points: ${inttostring(varbitplayer_21658, 10)}`, 67829765);
        IF_SETTEXT(`Level: ${inttostring(varplayer_4162, 10)}`, 67829811);
    } else {
        IF_SETHIDE(1, 67829982);
        IF_SETHIDE(1, 67829761);
        IF_SETHIDE(0, 67829989);
        IF_SETHIDE(0, 67829762);
        IF_SETTEXT(`Wins: ${inttostring(varbitplayer_21659, 10)}    Reward points: ${inttostring(varbitplayer_21658, 10)}`, 67829765);
        IF_SETTEXT(`Level: ${inttostring(varplayer_4163, 10)}`, 67829856);
    };
    return;
}