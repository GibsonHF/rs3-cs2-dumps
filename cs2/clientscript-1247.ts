//
function script1247(int0: number, int1: number, string0: string): void {
    if (((strcmp(string0, "This name is already taken.") == 0) && (STRING_LENGTH(varclient_2563) == 0))) {
        var string0 = "Please enter a displayname.";
    };
    if ((int0 == 1)) {
        script7845(int1, string0);
    } else {
        IF_SETTEXT(string0, 4194406);
        switch (int1) {
            case 1: {
                IF_SETGRAPHIC(19716, 4194337);
                IF_SETHIDE(1, 4194311);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(18861, 4194337);
                IF_SETHIDE(1, 4194311);
                break;
            }
            case 3: {
                IF_SETGRAPHIC(19718, 4194337);
                IF_SETHIDE(1, 4194311);
                break;
            }
            default: {
                IF_SETGRAPHIC(19717, 4194337);
                IF_SETHIDE(0, 4194311);
                break;
            }
        };
        IF_SETHIDE(0, 4194335);
    };
    return;
}