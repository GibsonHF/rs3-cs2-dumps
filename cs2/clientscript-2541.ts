//
function script2541(): void {
    if ((IF_GETHIDE(2490379) == 1)) {
        IF_SETTEXT("About Mining", 2490389);
        IF_SETHIDE(1, 2490378);
        IF_SETHIDE(1, 2490369);
        IF_SETHIDE(0, 2490379);
        IF_SETHIDE(0, 2490371);
    } else {
        IF_SETTEXT("About Smithing", 2490389);
        IF_SETHIDE(0, 2490378);
        IF_SETHIDE(0, 2490369);
        IF_SETHIDE(1, 2490379);
        IF_SETHIDE(1, 2490371);
    };
    return;
}