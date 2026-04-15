//
function script18514(): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 150);
    var int0 = struct_getparam(script18493(), 9075);
    var string0 = "";
    switch (DB_GETROWTABLE(int0)) {
        case 280: {
            string0 = "Whilst the reward track is active, each key you use will contribute towards unlocking the bonus reward. Once the reward is unlocked, select the reward to claim it.";
            break;
        }
        case 26: {
            string0 = "Whilst the daily reward track is active, each key you use will contribute towards unlocking the bonus reward. Once the reward is unlocked, select the reward to claim it. At the end of the day, the track will reset. Unclaimed rewards may be lost on reset.";
            break;
        }
    };
    IF_SETTEXT(string0, comp(1253, 353));
    IF_SETHIDE(false, comp(1253, 349));
    return;
}