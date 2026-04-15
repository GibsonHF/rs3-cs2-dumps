//
function script4415(): void {
    stack(72548419);
    stack(72548422);
    stack(72548420);
    script9554(ACTIVECLANSETTINGS_GETCLANNAME(), 21218);
    IF_SETTEXT(`Game time:<br>${script4337(varclansettings_0)}`, 72548378);
    IF_SETTEXT(`<col=FFFFFF>${ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT())}</col>`, 72548398);
    if ((varbitclansettings_8805 > 0)) {
        IF_SETTEXT(`<col=FFFFFF>${inttostring(varbitclansettings_8805, 10)}</col>`, comp(1107, 47));
    };
    IF_SETTEXT(`<col=FFFFFF>${inttostring(ACTIVECLANSETTINGS_GETAFFINEDCOUNT(), 10)}</col>`, comp(1107, 48));
    if ((varbitclansettings_8803 == 0)) {
        IF_SETTEXT("<col=FFFFFF>This clan is not recruiting.</col>", comp(1107, 21));
    } else if ((varbitclansettings_8803 == 1)) {
        IF_SETTEXT("<col=FFFFFF>This clan is recruiting.</col>", comp(1107, 21));
    };
    script4332(comp(1107, 5), comp(1107, 8));
    script4334(comp(1107, 11), comp(1107, 12));
    script4336(comp(1107, 32));
    script4343(comp(1107, 33));
    script4329(comp(1107, 49));
    script4328(72548380);
    script12226(comp(1107, 23));
    IF_SETHIDE(true, comp(1107, 55));
    return;
}