//
function script1914(): void {
    CC_DELETEALL(comp(267, 55));
    CC_DELETEALL(comp(267, 56));
    IF_SETGRAPHIC(2217 as graphic, comp(267, 44));
    IF_SETGRAPHIC(30104 as graphic, comp(267, 48));
    IF_SETTEXT(inttostring((varplayer_1297 - varbitplayer_42073), 10), comp(267, 49));
    var int0 = ENUM_GETOUTPUTCOUNT(14536 as cs2enum);
    script1917(int0);
    return;
}