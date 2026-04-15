//
function script10111(): void {
    CC_DELETEALL(comp(232, 8));
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
        script10112(int1, comp(232, 8), string3, string2, int0, string0);
        int1 = (int1 + 1);
        stack(TTV_LIVESTREAMS_GETSTREAM_NEXT());
        [int0, string0, string1, string2, string3] = stack();
    };
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(232, 8)), (int1 * 47), comp(232, 8));
    script31(comp(232, 7), comp(232, 8), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    return;
}