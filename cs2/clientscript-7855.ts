//
function script7855(int0: number, int1: number): void {
    varclient_3685 = varclient_2563;
    IF_SETTEXT(`${inttostring(STRING_LENGTH(varclient_2563), 10)} / 12`, 51511305);
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
        IF_SETONTIMER(callback(script7856), 93061127);
    } else {
        IF_TRIGGEROP(51511296, -1, 1);
        IF_SETHIDE(1, 51511306);
        IF_SETHIDE(0, 51511307);
    };
    return;
}