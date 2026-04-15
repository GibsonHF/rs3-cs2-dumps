//
function script14791(): string {
    var string0 = "Sprite Focus - A 10% increase to Archaeology XP";
    var string1 = `Bonus (${inttostring(40, 10)}%) : A further 10% increase to Archaeology XP and a 10% increase to your mattock's precision`;
    var string2 = `Bonus (${inttostring(100, 10)}%) : Guaranteed material and ${inttostring(script14581(), 10)}x mattock precision for a single action. Your focus is then reduced to ${inttostring(60, 10)}%`;
    if ((varplayer_9307 < 40)) {
        string0 = `${string0}<br><br><col=969696>${string1}</col><br><col=969696>${string2}</col>`;
    } else {
        string0 = `${string0}<br><br>${string1}<br><col=969696>${string2}</col>`;
    };
    return string0;
}