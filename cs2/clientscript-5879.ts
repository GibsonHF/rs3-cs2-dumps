//
function script5879(): void {
    varclient_1783 = 0;
    var int0 = 82116608;
    var int1 = MAX(0, script6950());
    var string0 = "Whether to use a single key, or to use one after another.";
    var int2 = script15513();
    if (((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5))) {
        IF_SETSIZE(48, 48, 0, 0, 82117165);
        IF_SETPOSITION(1, 1, 2, 0, 82117165);
        IF_SETONCLICK(callback(script7774, string0, 82116665, -1, 0), 82116665);
    };
    switch (int2) {
        case 33217: {
            IF_SETHIDE(1, 82116616);
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116698);
            stack(27051);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 34277: {
            IF_SETHIDE(1, 82116616);
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116698);
            stack(28095);
            stack(82116613);
            IF_SETGRAPHIC();
            stack(script12723());
            stack(117047297);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            IF_SETHIDE(0, 82116616);
            IF_SETHIDE(0, 82116779);
            IF_SETHIDE(0, 82116698);
            if (((int2 == 33918) || (int2 == 33522))) {
                IF_SETHIDE(1, 82116697);
            };
            break;
        }
    };
    script4115();
    if (((varbitplayer_4323 > 0) || (varclient_1781 > 0))) {
        script6976();
    } else if ((int1 > 0)) {
        script6974();
    } else {
        script6974();
    };
    script3904();
    varclient_1781 = -1;
    IF_SETONVARCTRANSMIT(callback(script5880, 1800, 1), 82116653);
    IF_SETONVARTRANSMIT(callback(script5880, 1448, 1451, 2), 82116653);
    varclient_1784 = 0;
    script5881();
    return;
}