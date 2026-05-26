//
function script4852(): void {
    var int0 = -1 as cs2enum;
    var string0 = "This build slot is available, select your options and click the buy button.";
    if ((CLANPROFILE_FIND() == 1)) {
        int0 = script4825(1);
        IF_SET2DANGLE(0, 82444878);
        IF_SET2DANGLE(0, 82444869);
        IF_SET2DANGLE(0, 82444860);
        if (((varbitplayer_6985 > 0) && (varbitplayer_6985 == varbitclan_6682))) {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int0, varbitplayer_6985), 82444878);
            string0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else if ((varbitclan_6686 == 1)) {
            IF_SETGRAPHIC(6496 as graphic, 82444878);
            IF_SET2DANGLE(49149, 82444878);
            string0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else {
            IF_SETGRAPHIC(-1 as graphic, 82444878);
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444876);
        int0 = script4825(2);
        string0 = "This build slot is available, select your options and click the buy button.";
        if (((varbitplayer_6994 > 0) && (varbitplayer_6994 == varbitclan_6691))) {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int0, varbitplayer_6994), 82444869);
            string0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else if ((varbitclan_6695 == 1)) {
            IF_SETGRAPHIC(6496 as graphic, 82444869);
            IF_SET2DANGLE(49149, 82444869);
            string0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else {
            IF_SETGRAPHIC(-1 as graphic, 82444869);
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444867);
        int0 = script4825(3);
        string0 = "This build slot is available, select your options and click the buy button.";
        if (((varbitplayer_7003 > 0) && (varbitplayer_7003 == varbitclan_6700))) {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int0, varbitplayer_7003), 82444860);
            string0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else if ((varbitclan_6704 == 1)) {
            IF_SETGRAPHIC(6496 as graphic, 82444860);
            IF_SET2DANGLE(49149, 82444860);
            string0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else {
            IF_SETGRAPHIC(-1 as graphic, 82444860);
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444858);
    };
    return;
}