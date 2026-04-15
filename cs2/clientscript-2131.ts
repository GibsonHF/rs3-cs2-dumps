//
function script2131(int0: quest): [unknown_int, string] {
    var string0 = "";
    var int1 = 0;
    if ((quest_getparam(int0, 7861) == true)) {
        int1 = 1;
        string0 = script1164(varbitplayer_9663, 1, "Ability to enter Morytania");
        string0 = `${string0}<br>`;
    };
    return [int1, string0];
}