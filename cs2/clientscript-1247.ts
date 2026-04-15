//
function script1247(int0: unknown_int, int1: int, string0: string): void {
    if (((strcmp(string0, "This name is already taken.") == 0) && (STRING_LENGTH(varclient_2563) == 0))) {
        var string0 = "Please enter a displayname.";
    };
    if ((int0 == 1)) {
        script7845(int1, string0);
    } else {
        IF_SETTEXT(string0, comp(64, 102));
        switch (int1) {
            case 1: {
                stack(19716);
                stack(4194337);
                IF_SETGRAPHIC();
                IF_SETHIDE(1, 4194311);
                break;
            }
            case 2: {
                stack(18861);
                stack(4194337);
                IF_SETGRAPHIC();
                IF_SETHIDE(1, 4194311);
                break;
            }
            case 3: {
                stack(19718);
                stack(4194337);
                IF_SETGRAPHIC();
                IF_SETHIDE(1, 4194311);
                break;
            }
            default: {
                stack(19717);
                stack(4194337);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 4194311);
                break;
            }
        };
        IF_SETHIDE(false, comp(64, 31));
    };
    return;
}