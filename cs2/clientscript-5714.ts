//
function script5714(int0: number): void {
    switch (int0) {
        case 0: {
            script2957(script20385(), script20386(), 1);
            break;
        }
        case 1: {
            return;
        }
        case 4: {
            if (((IF_FIND(comp(365, 2)) == 1) && (STRING_LENGTH(CC_GETTEXT()) < 2))) {
                CC_SETTEXT("");
            };
            break;
        }
    };
    if ((script5718() == 1)) {
        varclient_8421 = comp(365, 2);
        varclient_8422 = -1;
        script2957(script20385(), script20386(), 0);
    };
    return;
}