//
function script2216(): void {
    if ((varplayer_2938 == 2)) {
        if ((varclient_1137 == 0)) {
            SOUND_SYNTH(33546, 1, 0);
        };
        varclient_1137 = 1;
        IF_SETONTIMER(callback(script2214), comp(932, 1));  // easter10_nuts:content
    } else {
        printmessage("There is nothing to push off!");
    };
    return;
}