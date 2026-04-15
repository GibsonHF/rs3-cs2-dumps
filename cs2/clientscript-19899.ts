//
function script19899(): void {
    switch (varbitplayer_57809) {
        case 1: {
            script15491(comp(1082, 153), 0);
            script15491(comp(1082, 159), 1);
            script15491(comp(1082, 165), 1);
            break;
        }
        case 2: {
            script15491(comp(1082, 159), 0);
            script15491(comp(1082, 153), 1);
            script15491(comp(1082, 165), 1);
            break;
        }
        case 3: {
            script15491(comp(1082, 165), 0);
            script15491(comp(1082, 153), 1);
            script15491(comp(1082, 159), 1);
            break;
        }
        default: {
            script15491(comp(1082, 153), 1);
            script15491(comp(1082, 159), 1);
            script15491(comp(1082, 165), 1);
            break;
        }
    };
    return;
}