//
function script4751(): void {
    var int0 = script15513();
    switch (int0) {
        case 12006: {
            IF_SETTEXT("The volcano is erupting! All volcanic lamps have been replaced with erupting lamps.<br>Erupting lamps grant 100% extra XP compared to volcanic lamps!", comp(1253, 79));
            IF_SETONVARTRANSMIT(callback(script4764, 9133, 9133, 9133, 3), comp(1253, 74));
            break;
        }
        case 45877: {
            if ((varbitplayer_50389 == 1)) {
                IF_SETHIDE(false, comp(1253, 80));
            };
            IF_SETONVARTRANSMIT(callback(script4764, 10238, 10238, 10238, 3), comp(1253, 74));
            break;
        }
        case 38119: {
            if ((varbitplayer_29983 == 1)) {
                IF_SETHIDE(false, comp(1253, 80));
            };
            IF_SETONVARTRANSMIT(callback(script4764, 10238, 10321, 10321, 3), comp(1253, 74));
            break;
        }
        default: {
            IF_SETHIDE(true, comp(1253, 80));
            IF_SETHIDE(true, comp(1253, 75));
            break;
        }
    };
    return;
}