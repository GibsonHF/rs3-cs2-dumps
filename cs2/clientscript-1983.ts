//
function script1983(int0: int): void {
    var int0 = MAX(0, MIN(int0, 1));
    SOUND_VORBIS_VOLUME(14378 as vorbis, 1, 0, 255);
    varclient_1184 = int0;
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1035, 229));
        IF_SETHIDE(true, comp(1035, 2));
        IF_SETHIDE(false, comp(1035, 222));
        IF_SETHIDE(false, comp(1035, 1));
        IF_SETTEXT(`Wins: ${inttostring(varbitplayer_21659, 10)}    Reward points: ${inttostring(varbitplayer_21658, 10)}`, comp(1035, 5));
        IF_SETTEXT(`Level: ${inttostring(varplayer_4162, 10)}`, comp(1035, 51));
    } else {
        IF_SETHIDE(true, comp(1035, 222));
        IF_SETHIDE(true, comp(1035, 1));
        IF_SETHIDE(false, comp(1035, 229));
        IF_SETHIDE(false, comp(1035, 2));
        IF_SETTEXT(`Wins: ${inttostring(varbitplayer_21659, 10)}    Reward points: ${inttostring(varbitplayer_21658, 10)}`, comp(1035, 5));
        IF_SETTEXT(`Level: ${inttostring(varplayer_4163, 10)}`, comp(1035, 96));
    };
    return;
}