//
function script1247(int0: number, int1: number, string0: string): void {
    if (((strcmp(string0, "This name is already taken.") == 0) && (STRING_LENGTH(varclient_2563) == 0))) {
        var string0 = "Please enter a displayname.";
    };
    if ((int0 == 1)) {
        script7845(int1, string0);
    } else {
        IF_SETTEXT(string0, comp(64, 102));
        switch (int1) {
            case 1: {
                IF_SETGRAPHIC(19716 as graphic, comp(64, 33));
                IF_SETHIDE(true, comp(64, 7));
                break;
            }
            case 2: {
                IF_SETGRAPHIC(18861 as graphic, comp(64, 33));
                IF_SETHIDE(true, comp(64, 7));
                break;
            }
            case 3: {
                IF_SETGRAPHIC(19718 as graphic, comp(64, 33));
                IF_SETHIDE(true, comp(64, 7));
                break;
            }
            default: {
                IF_SETGRAPHIC(19717 as graphic, comp(64, 33));
                IF_SETHIDE(false, comp(64, 7));
                break;
            }
        };
        IF_SETHIDE(false, comp(64, 31));
    };
    return;
}