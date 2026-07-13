//
function script20800(int0: number, int1: number, int2: number, string0: string): void {
    switch (int2) {
        case 3: {
            var string0 = "";
            break;
        }
        case 4: {
            if ((STRING_LENGTH(string0) < 2)) {
                string0 = "";
            };
            break;
        }
    };
    if ((strcmp(varclient_8426, string0) == 0)) {
        return;
    };
    varclient_8426 = string0;
    varclient_8421 = int0;
    varclient_8422 = int1;
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTEXT(string0);
    };
    switch (int0) {
        case 99352585: {
            script20767();
            break;
        }
        case 99090442: {
            script20748();
            break;
        }
        case 99483656: {
            script20830();
            break;
        }
        default: {
            script12478("Unexpected component changing filter state.");
            break;
        }
    };
    return;
}