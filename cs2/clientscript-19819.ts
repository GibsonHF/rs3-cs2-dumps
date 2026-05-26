//
function script19819(int0: number): void {
    varclient_8281 = int0;
    switch (int0) {
        case 0: {
            script13972(45285393, -1, 28595, IF_GETTEXT(45285395), 1);
            script13972(45285396, -1, 28595, IF_GETTEXT(45285398), 0);
            script13972(45285399, -1, 28595, IF_GETTEXT(45285401), 0);
            script13972(45285402, -1, 28595, IF_GETTEXT(45285403), 0);
            break;
        }
        case 1: {
            script13972(45285393, -1, 28595, IF_GETTEXT(45285395), 0);
            script13972(45285396, -1, 28595, IF_GETTEXT(45285398), 1);
            script13972(45285399, -1, 28595, IF_GETTEXT(45285401), 0);
            script13972(45285402, -1, 28595, IF_GETTEXT(45285403), 0);
            break;
        }
        case 2: {
            script13972(45285393, -1, 28595, IF_GETTEXT(45285395), 0);
            script13972(45285396, -1, 28595, IF_GETTEXT(45285398), 0);
            script13972(45285399, -1, 28595, IF_GETTEXT(45285401), 1);
            script13972(45285402, -1, 28595, IF_GETTEXT(45285403), 0);
            break;
        }
        case 3: {
            script13972(45285393, -1, 28595, IF_GETTEXT(45285395), 0);
            script13972(45285396, -1, 28595, IF_GETTEXT(45285398), 0);
            script13972(45285399, -1, 28595, IF_GETTEXT(45285401), 0);
            script13972(45285402, -1, 28595, IF_GETTEXT(45285403), 1);
            break;
        }
    };
    switch (varbitplayer_57205) {
        case 0: {
            IF_SETHIDE(0, 45285395);
            IF_SETHIDE(1, 45285398);
            IF_SETHIDE(1, 45285401);
            IF_SETHIDE(1, 45285403);
            break;
        }
        case 1: {
            IF_SETHIDE(1, 45285395);
            IF_SETHIDE(0, 45285398);
            IF_SETHIDE(1, 45285401);
            IF_SETHIDE(1, 45285403);
            break;
        }
        case 2: {
            IF_SETHIDE(1, 45285395);
            IF_SETHIDE(1, 45285398);
            IF_SETHIDE(0, 45285401);
            IF_SETHIDE(1, 45285403);
            break;
        }
        case 3: {
            IF_SETHIDE(1, 45285395);
            IF_SETHIDE(1, 45285398);
            IF_SETHIDE(1, 45285401);
            IF_SETHIDE(0, 45285403);
            break;
        }
    };
    return;
}