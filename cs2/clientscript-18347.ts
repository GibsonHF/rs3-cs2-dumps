//
function script18347(int0: component): void {
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(16811 as vorbis, 1, 0, 180, 20, 20));
    IF_SETONTIMER(callback(script18348, 50, int0), int0);
    IF_SETHIDE(0, int0);
    IF_SETMODELANIM(328, int0);
    return;
}