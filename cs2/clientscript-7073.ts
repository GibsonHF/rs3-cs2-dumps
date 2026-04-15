//
function script7073(int0: int): int {
    var int1 = script18842(int0);
    if ((int1 == -1 as quest)) {
        script12478(`Quest #${inttostring(int0, 10)} missing from [ql4_quests]. enum.`);
        return 0;
    };
    return script2193(int1);
}