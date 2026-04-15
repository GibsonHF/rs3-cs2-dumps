//[clientscript,stockcollect_onload]
function script654(): void {
    IF_SETONINVTRANSMIT(callback(script4113, 523, 524, 525, 526, 527, 528, 783, 784, 540, 9), comp(109, 39));
    stack(4113);
    stack("");
    stack(7143463);
    IF_SETONSTOCKTRANSMIT();
    IF_SETONVARTRANSMIT(callback(script4113, 429, 431, 2), 7143463);
    script4114();
    return;
}