//
function script2132(int0: quest): [unknown_int, string] {
    var string0 = "";
    var int1 = 0;
    if ((quest_getparam(int0, 7860) > 0)) {
        int1 = 1;
        string0 = script1164(varbitplayer_16307, quest_getparam(int0, 7860), `${inttostring(quest_getparam(int0, 7860), 10)} Kudos`);
        string0 = `${string0}<br>`;
    };
    return [int1, string0];
}