//
function script3110(): unknown_int {
    var int0 = 0;
    if ((varbitclient_23068 > 0)) {
        int0 = 1;
    };
    if ((varbitclient_23080 == -1)) {
        printmessage("You need to set the broadcast resolution scale first.");
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        return 0;
    };
    if ((varbitclient_23072 == -1)) {
        printmessage("You need to set the bandwidth usage first.");
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        return 0;
    };
    varbitclient_23073 = 30;
    var int1 = TTV_STREAM_START(varbitclient_23080, varbitclient_23072, varbitclient_23073, int0);
    if ((int1 > 0)) {
        if ((int1 == 2069)) {
            printmessage("You are already broadcasting!");
            SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
            return 1;
        };
        printmessage(`Something went wrong (${inttostring(int1, 10)}). Please try again with different broadcast settings.`);
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        return 0;
    };
    int1 = TTV_STREAM_SETTITLE(varclient_4289);
    if ((int1 > 0)) {
        return 1;
    };
    return 1;
}