//[proc,graphics_options_message]
function script2694(int0: number, int1: number, string0: string): void {
    var int2 = 0;
    if ((int0 == 1)) {
        if ((STRING_LENGTH(string0) > 0)) {
            int2 = STRING_INDEXOF_STRING(string0, "<br>", 0);
            if ((int2 == -1)) {
                printmessage(string0);
                return;
            };
            printmessage(SUBSTRING(string0, 0, int2));
        };
        return;
    };
    if ((int0 == 2)) {
        IF_SETTEXT(script400(string0, "<br>", " "), 64094215);
        script2190("", string0, 0, -1, "", "", 0);
        IF_SETONCLICK(callback(), 52953093);
        return;
    };
    IF_SETTEXT(script400(string0, "<br>", " "), 64094215);
    if ((int0 == 4)) {
        return;
    };
    script2950(10009, 0, string0, 2608, "Back");
    return;
}