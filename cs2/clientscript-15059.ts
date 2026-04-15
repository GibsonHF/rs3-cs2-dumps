//
function script15059(int0: component): void {
    switch (int0) {
        case 6881606: {
            if (((strcmp(varclient_6788, "") != 0) && (strcmp(varclient_6788, varclient_2250) != 0))) {
                script15060(varclient_6788, varplayer_135, 1);
            } else {
                script15060(varclient_2250, varplayer_135, 1);
            };
            break;
        }
        case 43384839: {
            script11688();
            break;
        }
        case 43384878: {
            if ((IF_GETHEIGHT(int0) == 4)) {
                CC_DELETEALL(int0);
                CC_DELETEALL(comp(662, 47));
                CC_DELETEALL(comp(662, 48));
                IF_SETSCROLLPOS(0, 0, comp(662, 48));
                IF_SETSCROLLSIZE(0, 0, comp(662, 48));
                CC_DELETEALL(comp(662, 49));
            } else {
                script13785();
            };
            break;
        }
        case 33882248: {
            if ((IF_GETWIDTH(comp(517, 136)) <= 1)) {
                IF_SETHIDE(true, comp(517, 136));
            };
            break;
        }
    };
    return;
}