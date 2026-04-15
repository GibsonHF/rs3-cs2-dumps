//
function script7855(int0: unknown_int, int1: unknown_int): void {
    varclient_3685 = varclient_2563;
    IF_SETTEXT(`${inttostring(STRING_LENGTH(varclient_2563), 10)} / 12`, comp(786, 9));
    if ((STRING_LENGTH(varclient_2563) <= 0)) {
        script7845(5, "Display names can be up to 12 characters long and may contain letters, numbers, spaces, underscores and dashes only.");
        return;
    };
    if ((STRING_INDEXOF_STRING("- _", SUBSTRING(varclient_2563, 0, 1), 0) != -1)) {
        script3213("Display names cannot start with a space, dash or underscore.");
        return;
    };
    if ((script7850(varclient_2563) == 0)) {
        script3213("Please enter a valid display name.");
        return;
    };
    if ((IF_GETTOP() == 906)) {
        script7845(4, "You have entered a valid character name!<br>Please wait while the system checks availability.");
        CREATE_NAME_AVAILABLEREQUEST(varclient_2563);
        IF_SETONTIMER(callback(script7856), comp(1420, 7));
    } else {
        IF_TRIGGEROP(comp(786, 0), -1, 1);
        IF_SETHIDE(true, comp(786, 10));
        IF_SETHIDE(false, comp(786, 11));
    };
    return;
}