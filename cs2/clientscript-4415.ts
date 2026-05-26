//
function script4415(): void {
    script9554(72548419, 72548422, 72548420, ACTIVECLANSETTINGS_GETCLANNAME(), 21218);
    IF_SETTEXT(`Game time:<br>${script4337(varclansettings_0)}`, comp(1107, 26));
    IF_SETTEXT(`<col=FFFFFF>${ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT())}</col>`, comp(1107, 46));
    if ((varbitclansettings_8805 > 0)) {
        IF_SETTEXT(`<col=FFFFFF>${inttostring(varbitclansettings_8805, 10)}</col>`, comp(1107, 47));
    };
    IF_SETTEXT(`<col=FFFFFF>${inttostring(ACTIVECLANSETTINGS_GETAFFINEDCOUNT(), 10)}</col>`, comp(1107, 48));
    if ((varbitclansettings_8803 == 0)) {
        IF_SETTEXT("<col=FFFFFF>This clan is not recruiting.</col>", comp(1107, 21));
    } else if ((varbitclansettings_8803 == 1)) {
        IF_SETTEXT("<col=FFFFFF>This clan is recruiting.</col>", comp(1107, 21));
    };
    script4332(72548357, 72548360);
    script4334(72548363, 72548364);
    script4336(72548384);
    script4343(72548385);
    script4329(72548401);
    script4328(72548380);
    script12226(72548375);
    IF_SETHIDE(true, comp(1107, 55));
    return;
}