//
function script4415(): void {
    stack(72548419);
    stack(72548422);
    stack(72548420);
    script9554(ACTIVECLANSETTINGS_GETCLANNAME(), 21218);
    IF_SETTEXT(`Game time:<br>${script4337(varclansettings_0)}`, 72548378);
    IF_SETTEXT(`<col=FFFFFF>${ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT())}</col>`, 72548398);
    if ((varbitclansettings_8805 > 0)) {
        IF_SETTEXT(`<col=FFFFFF>${inttostring(varbitclansettings_8805, 10)}</col>`, 72548399);
    };
    IF_SETTEXT(`<col=FFFFFF>${inttostring(ACTIVECLANSETTINGS_GETAFFINEDCOUNT(), 10)}</col>`, 72548400);
    if ((varbitclansettings_8803 == 0)) {
        IF_SETTEXT("<col=FFFFFF>This clan is not recruiting.</col>", 72548373);
    } else if ((varbitclansettings_8803 == 1)) {
        IF_SETTEXT("<col=FFFFFF>This clan is recruiting.</col>", 72548373);
    };
    script4332(72548357, 72548360);
    script4334(72548363, 72548364);
    script4336(72548384);
    script4343(72548385);
    script4329(72548401);
    script4328(72548380);
    script12226(72548375);
    IF_SETHIDE(1, 72548407);
    return;
}