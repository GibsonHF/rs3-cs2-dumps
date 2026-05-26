//
function script10111(): void {
    CC_DELETEALL(15204360);
    varclient_4294 = -1;
    varclient_4295 = -1;
    varclient_4296 = -1;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int0 = 0;
    var int1 = 0;
    stack(TTV_LIVESTREAMS_GETSTREAM_START());
    [int0, string0, string1, string2, string3] = stack();
    while ((int0 != -1)) {
        script10112(int1, 15204360, string3, string2, int0, string0);
        int1 = (int1 + 1);
        stack(TTV_LIVESTREAMS_GETSTREAM_NEXT());
        [int0, string0, string1, string2, string3] = stack();
    };
    IF_SETSCROLLSIZE(IF_GETWIDTH(15204360), (int1 * 47), 15204360);
    script31(15204359, 15204360, 5666, 5663, 5664, 5665, 5686, 5685);
    return;
}