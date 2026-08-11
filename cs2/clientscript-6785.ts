//
function script6785(): void {
    if (((varplayer_3936 == 0) || (script7073(varplayer_3936) == 2))) {
        IF_SETHIDE(true, comp(1500, 17));  // quest_journal:accept_job_1
        IF_SETHIDE(true, comp(1500, 419));  // quest_journal:accept_job_2
        return;
    };
    IF_SETHIDE(false, comp(1500, 17));  // quest_journal:accept_job_1
    IF_SETHIDE(false, comp(1500, 419));  // quest_journal:accept_job_2
    var string0 = "Set Active";
    var int0 = 28554;
    if ((varbitplayer_3260 == varplayer_3936)) {
        string0 = "Active";
        int0 = 28553;
    };
    script13969(98304018, 98304019, int0, string0);
    script13969(98304420, 98304421, int0, string0);
    return;
}