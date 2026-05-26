//
function script468(): void {
    if ((unk10986(0) == 1)) {
        script10416(11665424, 11665425, "Show broadcasts to guests", "Hide broadcasts to guests", "Show broadcasts to guests", (1 - varbitclansettings_41364));
        if ((varbitclansettings_41363 == 0)) {
            IF_SETHIDE(1, 11665416);
            IF_SETHIDE(0, 11665417);
            IF_SETHIDE(0, 11665419);
            IF_SETHIDE(1, 11665420);
            IF_SETHIDE(0, 11665422);
            IF_SETHIDE(1, 11665423);
        } else if ((varbitclansettings_41363 == 1)) {
            IF_SETHIDE(0, 11665416);
            IF_SETHIDE(1, 11665417);
            IF_SETHIDE(1, 11665419);
            IF_SETHIDE(0, 11665420);
            IF_SETHIDE(0, 11665422);
            IF_SETHIDE(1, 11665423);
        } else {
            IF_SETHIDE(0, 11665416);
            IF_SETHIDE(1, 11665417);
            IF_SETHIDE(0, 11665419);
            IF_SETHIDE(1, 11665420);
            IF_SETHIDE(1, 11665422);
            IF_SETHIDE(0, 11665423);
        };
    } else {
        printmessage("You're not in a clan so can't access this.");
        return;
    };
    return;
}