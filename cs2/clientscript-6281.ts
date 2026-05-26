//
function script6281(int0: number): void {
    if ((varclient_1930 > 0)) {
        return;
    };
    switch (int0) {
        case 1: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15746, 1, 0, 255);
            varclient_1930 = 315;
            break;
        }
        case 2: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15744, 1, 0, 255);
            varclient_1930 = 72;
            break;
        }
        case 3: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15739, 1, 0, 255);
            varclient_1930 = 140;
            break;
        }
        case 4: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15720, 1, 0, 255);
            varclient_1930 = 192;
            break;
        }
        case 5: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15730, 1, 0, 255);
            varclient_1930 = 140;
            break;
        }
        case 6: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15740, 1, 0, 255);
            varclient_1930 = 212;
            break;
        }
        case 7: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15738, 1, 0, 255);
            varclient_1930 = 244;
            break;
        }
        case 8: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15724, 1, 0, 255);
            varclient_1930 = 190;
            break;
        }
        case 9: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15745, 1, 0, 255);
            varclient_1930 = 190;
            break;
        }
        case 10: {
            printmessage("Playing sound...");
            SOUND_VORBIS_VOLUME(15742, 1, 0, 255);
            varclient_1930 = 145;
            break;
        }
    };
    IF_SETONTIMER(callback(script6282), 85000357);
    return;
}