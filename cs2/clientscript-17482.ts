//
function script17482(int0: dbrow): [unknown_int, string] {
    var string0 = "";
    var int1 = 1;
    var string1 = "";
    switch (int0) {
        case 7600: {
            string1 = `${string1}<br>- Level <col=ffffff>${inttostring(1, 10)}</col> ${enum_getvalue(17, 36, 680 as cs2enum, 28 as stat)}`;
            if ((STAT_BASE(28 as stat) < 1)) {
                int1 = 0;
            };
            break;
        }
        case 7601: {
            string1 = `${string1}<br>- Level <col=ffffff>${inttostring(20, 10)}</col> ${enum_getvalue(17, 36, 680 as cs2enum, 28 as stat)}`;
            if ((STAT_BASE(28 as stat) < 20)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- <col=ffffff>${TOSTRING_LOCALISED(50, 1)}</col> vessel souls`;
            if ((varbitplayer_53627 < 50)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- Unlock at least one tier <col=ffffff>${dbrow_getfield(7600 as dbrow, 950272, 0)}</col> talent`;
            if ((script17484(7600 as dbrow, 2) == 0)) {
                int1 = 0;
            };
            break;
        }
        case 7602: {
            string1 = `${string1}<br>- Level <col=ffffff>${inttostring(40, 10)}</col> ${enum_getvalue(17, 36, 680 as cs2enum, 28 as stat)}`;
            if ((STAT_BASE(28 as stat) < 40)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- <col=ffffff>${TOSTRING_LOCALISED(400, 1)}</col> vessel souls`;
            if ((varbitplayer_53627 < 400)) {
                int1 = 0;
            };
            string0 = "Rune Mythos";
            string1 = `${string1}<br>- Completed '<col=ffffff>${string0}</col>' quest`;
            if ((varbitplayer_53546 < 30)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- Unlock at least one tier <col=ffffff>${dbrow_getfield(7601 as dbrow, 950272, 0)}</col> talent`;
            if ((script17484(7601 as dbrow, 2) == 0)) {
                int1 = 0;
            };
            break;
        }
        case 7603: {
            string1 = `${string1}<br>- Level <col=ffffff>${inttostring(60, 10)}</col> ${enum_getvalue(17, 36, 680 as cs2enum, 28 as stat)}`;
            if ((STAT_BASE(28 as stat) < 60)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- <col=ffffff>${TOSTRING_LOCALISED(2000, 1)}</col> vessel souls`;
            if ((varbitplayer_53627 < 2000)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- Unlock at least one tier <col=ffffff>${dbrow_getfield(7602 as dbrow, 950272, 0)}</col> talent`;
            if ((script17484(7602 as dbrow, 2) == 0)) {
                int1 = 0;
            };
            break;
        }
        case 7604: {
            string1 = `${string1}<br>- Level <col=ffffff>${inttostring(70, 10)}</col> ${enum_getvalue(17, 36, 680 as cs2enum, 28 as stat)}`;
            if ((STAT_BASE(28 as stat) < 70)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- <col=ffffff>${TOSTRING_LOCALISED(4500, 1)}</col> vessel souls`;
            if ((varbitplayer_53627 < 4500)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- Unlock at least one tier <col=ffffff>${dbrow_getfield(7603 as dbrow, 950272, 0)}</col> talent`;
            if ((script17484(7603 as dbrow, 2) == 0)) {
                int1 = 0;
            };
            break;
        }
        case 7605: {
            string1 = `${string1}<br>- Level <col=ffffff>${inttostring(80, 10)}</col> ${enum_getvalue(17, 36, 680 as cs2enum, 28 as stat)}`;
            if ((STAT_BASE(28 as stat) < 80)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- <col=ffffff>${TOSTRING_LOCALISED(8500, 1)}</col> vessel souls`;
            if ((varbitplayer_53627 < 8500)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- Unlock at least one tier <col=ffffff>${dbrow_getfield(7604 as dbrow, 950272, 0)}</col> talent`;
            if ((script17484(7604 as dbrow, 2) == 0)) {
                int1 = 0;
            };
            break;
        }
        case 7606: {
            string1 = `${string1}<br>- Level <col=ffffff>${inttostring(90, 10)}</col> ${enum_getvalue(17, 36, 680 as cs2enum, 28 as stat)}`;
            if ((STAT_BASE(28 as stat) < 90)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- <col=ffffff>${TOSTRING_LOCALISED(35000, 1)}</col> vessel souls`;
            if ((varbitplayer_53627 < 35000)) {
                int1 = 0;
            };
            string1 = `${string1}<br>- Unlock at least one tier <col=ffffff>${dbrow_getfield(7605 as dbrow, 950272, 0)}</col> talent`;
            if ((script17484(7605 as dbrow, 2) == 0)) {
                int1 = 0;
            };
            break;
        }
    };
    return [int1, string1];
}