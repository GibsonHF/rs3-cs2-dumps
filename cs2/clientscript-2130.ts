//
function script2130(int0: quest): [unknown_int, string] {
    var string0 = "";
    var int1 = 0;
    if ((QUEST_POINTSREQ(int0) > 0)) {
        int1 = 1;
        string0 = script1164(varplayer_1297, QUEST_POINTSREQ(int0), `${inttostring(QUEST_POINTSREQ(int0), 10)} Quest Points`);
        string0 = `${string0}<br>`;
    };
    return [int1, string0];
}