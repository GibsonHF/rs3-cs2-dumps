//
function script20838(int0: number): void {
    switch (varplayer_13433) {
        case 1: {
            if ((STRING_LENGTH(varclient_8446) > 0)) {
                IF_SETTEXT(`<col=FFFFFF>${varclient_8445}</col> is inviting you to become a founding member of their homestead: <col=FFFFFF>${varclient_8446}</col>`, int0);
            } else {
                IF_SETTEXT(`<col=FFFFFF>${varclient_8445}</col> is inviting you to become a founding member of their homestead.`, int0);
            };
            break;
        }
        case 2: {
            IF_SETTEXT(`<col=FFFFFF>${varclient_8445}</col> is inviting you to become a member of their homestead: <col=FFFFFF>${varclient_8446}</col>`, int0);
            break;
        }
        case 3: {
            IF_SETTEXT(`<col=FFFFFF>${varclient_8445}</col> is inviting you to <col=FFFFFF>swap plots</col>.`, int0);
            break;
        }
    };
    return;
}