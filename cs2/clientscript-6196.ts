//
function script6196(): void {
    var string0 = "";
    if ((STRING_LENGTH(varclient_4293) > 0)) {
        string0 = strconcat("https://www.twitch.tv/", varclient_4293);
        OPENURLRAW(string0, 0);
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    } else {
        printmessage("You need to choose a broadcast first");
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
    };
    return;
}