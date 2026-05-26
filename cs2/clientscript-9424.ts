//
function script9424(int0: number): void {
    if ((int0 > script9514())) {
        switch (int0) {
            case 2: {
                printmessage("This tier is not available until phase 3 of the event.");
                break;
            }
            case 3: {
                printmessage("This tier is not available until phase 5 of the event.");
                break;
            }
            default: {
                printmessage("This tier is not yet available.");
                break;
            }
        };
        SOUND_VORBIS_VOLUME(10046, 1, 0, 200);
        return;
    };
    if ((int0 >= 2)) {
        IF_SETHIDE(1, 46596240);
    };
    if ((int0 >= 3)) {
        IF_SETHIDE(1, 46596245);
    };
    IF_SETGRAPHIC(18090, 46596232);
    IF_SETGRAPHIC(18091, 46596233);
    IF_SETGRAPHIC(18092, 46596234);
    IF_SETGRAPHIC(18090, 46596236);
    IF_SETGRAPHIC(18091, 46596237);
    IF_SETGRAPHIC(18092, 46596238);
    IF_SETGRAPHIC(18090, 46596241);
    IF_SETGRAPHIC(18091, 46596242);
    IF_SETGRAPHIC(18092, 46596243);
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(18087, 46596232);
            IF_SETGRAPHIC(18088, 46596233);
            IF_SETGRAPHIC(18089, 46596234);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(18087, 46596236);
            IF_SETGRAPHIC(18088, 46596237);
            IF_SETGRAPHIC(18089, 46596238);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(18087, 46596241);
            IF_SETGRAPHIC(18088, 46596242);
            IF_SETGRAPHIC(18089, 46596243);
            break;
        }
    };
    varbitplayer_21031 = int0;
    SOUND_VORBIS_VOLUME(36972, 1, 0, 200);
    script9426(varclient_3857);
    return;
}