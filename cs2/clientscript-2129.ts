//
function script2129(int0: quest): [unknown_int, string] {
    var string0 = "";
    var int1 = 0;
    if ((quest_getparam(int0, 7859) > 0)) {
        int1 = 1;
        string0 = script1164(script1432(), quest_getparam(int0, 7859), `Combat Level ${inttostring(quest_getparam(int0, 7859), 10)}`);
        string0 = `${string0}<br>`;
    };
    return [int1, string0];
}