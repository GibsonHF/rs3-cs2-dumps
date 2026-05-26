//
function script15059(int0: number): void {
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
                CC_DELETEALL(43384879);
                CC_DELETEALL(43384880);
                IF_SETSCROLLPOS(0, 0, 43384880);
                IF_SETSCROLLSIZE(0, 0, 43384880);
                CC_DELETEALL(43384881);
            } else {
                script13785();
            };
            break;
        }
        case 33882248: {
            if ((IF_GETWIDTH(33882248) <= 1)) {
                IF_SETHIDE(1, 33882248);
            };
            break;
        }
    };
    return;
}