//
function script14378(int0: number): void {
    if (((int0 > 0) && (script5799(script14372(int0)) == 0))) {
        CANCEL_INTERFACE_DRAG();
        return;
    };
    script14379();
    if (((varclient_6678 + 10) > CLIENTCLOCK())) {
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = script14382();
    if (((int1 < 2) || (int1 == int0))) {
        script14385();
        return;
    };
    if ((varbitplayer_45192 == 1)) {
        IF_SETHIDE(0, 33882284);
        IF_SETHIDE(1, 33882295);
        IF_SETPOSITION(0, int2, 0, 0, 33882284);
        varclient_6678 = CLIENTCLOCK();
        if ((int3 == 1)) {
            IF_SETHIDE(0, 33882293);
            IF_SETHIDE(1, 33882289);
            IF_SETHIDE(1, 33882285);
        } else {
            IF_SETHIDE(1, 33882293);
            if ((int1 >= script5796())) {
                IF_SETHIDE(1, 33882289);
                IF_SETHIDE(0, 33882285);
            } else {
                IF_SETHIDE(0, 33882289);
                IF_SETHIDE(1, 33882285);
            };
        };
    } else {
        IF_SETHIDE(1, 33882284);
        IF_SETHIDE(0, 33882295);
        IF_SETPOSITION(int2, 0, 0, 0, 33882295);
        varclient_6678 = CLIENTCLOCK();
        IF_SETHIDE(0, 33882295);
        if ((int3 == 1)) {
            IF_SETHIDE(0, 33882304);
            IF_SETHIDE(1, 33882296);
            IF_SETHIDE(1, 33882300);
        } else {
            IF_SETHIDE(1, 33882304);
            if ((int1 >= script5796())) {
                IF_SETHIDE(1, 33882296);
                IF_SETHIDE(0, 33882300);
            } else {
                IF_SETHIDE(0, 33882296);
                IF_SETHIDE(1, 33882300);
            };
        };
    };
    return;
}