//
function script3721(): string {
    var int0 = script20699();
    var int1 = script20700();
    var string0 = "Pool Synergy:";
    var string1 = "2+ pools : Lobsters and swordfish grow 0.6 seconds faster.";
    var string2 = "3+ pools : Sharks grow 0.6 seconds faster.";
    var string3 = "4 pools : Giant crayfish grow 1.2 seconds faster.";
    if ((varbitplayer_60643 < 4)) {
        string3 = `<col=969696>${string3}</col>`;
    };
    if ((varbitplayer_60643 < 3)) {
        string2 = `<col=969696>${string2}</col>`;
    };
    if ((varbitplayer_60643 < 2)) {
        string1 = `<col=969696>${string1}</col>`;
    };
    string0 = `${string0}<br><br>${string1}<br>${string2}<br>${string3}`;
    return string0;
}