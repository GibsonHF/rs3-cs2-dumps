//
function script9424(int0: int): void {
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
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 200);
        return;
    };
    if ((int0 >= 2)) {
        IF_SETHIDE(true, comp(711, 144));
    };
    if ((int0 >= 3)) {
        IF_SETHIDE(true, comp(711, 149));
    };
    stack(18090);
    stack(46596232);
    IF_SETGRAPHIC();
    stack(18091);
    stack(46596233);
    IF_SETGRAPHIC();
    stack(18092);
    stack(46596234);
    IF_SETGRAPHIC();
    stack(18090);
    stack(46596236);
    IF_SETGRAPHIC();
    stack(18091);
    stack(46596237);
    IF_SETGRAPHIC();
    stack(18092);
    stack(46596238);
    IF_SETGRAPHIC();
    stack(18090);
    stack(46596241);
    IF_SETGRAPHIC();
    stack(18091);
    stack(46596242);
    IF_SETGRAPHIC();
    stack(18092);
    stack(46596243);
    IF_SETGRAPHIC();
    switch (int0) {
        case 1: {
            stack(18087);
            stack(46596232);
            IF_SETGRAPHIC();
            stack(18088);
            stack(46596233);
            IF_SETGRAPHIC();
            stack(18089);
            stack(46596234);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(18087);
            stack(46596236);
            IF_SETGRAPHIC();
            stack(18088);
            stack(46596237);
            IF_SETGRAPHIC();
            stack(18089);
            stack(46596238);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(18087);
            stack(46596241);
            IF_SETGRAPHIC();
            stack(18088);
            stack(46596242);
            IF_SETGRAPHIC();
            stack(18089);
            stack(46596243);
            IF_SETGRAPHIC();
            break;
        }
    };
    varbitplayer_21031 = int0;
    SOUND_VORBIS_VOLUME(36972 as vorbis, 1, 0, 200);
    script9426(varclient_3857);
    return;
}