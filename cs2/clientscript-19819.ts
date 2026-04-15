//
function script19819(int0: int): void {
    varclient_8281 = int0;
    switch (int0) {
        case 0: {
            script13972(comp(691, 17), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 19)), 1);
            script13972(comp(691, 20), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 22)), 0);
            script13972(comp(691, 23), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 25)), 0);
            script13972(comp(691, 26), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 27)), 0);
            break;
        }
        case 1: {
            script13972(comp(691, 17), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 19)), 0);
            script13972(comp(691, 20), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 22)), 1);
            script13972(comp(691, 23), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 25)), 0);
            script13972(comp(691, 26), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 27)), 0);
            break;
        }
        case 2: {
            script13972(comp(691, 17), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 19)), 0);
            script13972(comp(691, 20), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 22)), 0);
            script13972(comp(691, 23), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 25)), 1);
            script13972(comp(691, 26), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 27)), 0);
            break;
        }
        case 3: {
            script13972(comp(691, 17), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 19)), 0);
            script13972(comp(691, 20), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 22)), 0);
            script13972(comp(691, 23), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 25)), 0);
            script13972(comp(691, 26), comp(-1, 65535), 28595 as struct, IF_GETTEXT(comp(691, 27)), 1);
            break;
        }
    };
    switch (varbitplayer_57205) {
        case 0: {
            IF_SETHIDE(false, comp(691, 19));
            IF_SETHIDE(true, comp(691, 22));
            IF_SETHIDE(true, comp(691, 25));
            IF_SETHIDE(true, comp(691, 27));
            break;
        }
        case 1: {
            IF_SETHIDE(true, comp(691, 19));
            IF_SETHIDE(false, comp(691, 22));
            IF_SETHIDE(true, comp(691, 25));
            IF_SETHIDE(true, comp(691, 27));
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(691, 19));
            IF_SETHIDE(true, comp(691, 22));
            IF_SETHIDE(false, comp(691, 25));
            IF_SETHIDE(true, comp(691, 27));
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(691, 19));
            IF_SETHIDE(true, comp(691, 22));
            IF_SETHIDE(true, comp(691, 25));
            IF_SETHIDE(false, comp(691, 27));
            break;
        }
    };
    return;
}