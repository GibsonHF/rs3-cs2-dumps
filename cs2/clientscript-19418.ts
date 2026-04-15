//
function script19418(): void {
    var int0 = 0;
    var int1 = 0;
    var string0 = "";
    var int2 = 0;
    var int3 = -1 as graphic;
    CC_DELETEALL(comp(1300, 13));
    if ((IF_FIND(comp(1300, 13)) == 1)) {
        while ((++int0 <= 5)) {
            switch (int0) {
                case 1: {
                    string0 = varclient_8161;
                    break;
                }
                case 2: {
                    string0 = varclient_8162;
                    break;
                }
                case 3: {
                    string0 = varclient_8163;
                    break;
                }
                case 4: {
                    string0 = varclient_8164;
                    break;
                }
                case 5: {
                    string0 = varclient_8165;
                    break;
                }
            };
            if ((STRING_LENGTH(string0) > 0)) {
                int2 = 1;
            } else {
                int2 = 0;
            };
            script10033(1, int0, 0, int1, 0, 0, 0, 30, 1, 0, 7571 as dbrow);
            if (((varbitplayer_56572 == 1) && (int2 == 0))) {
                CC_SETOP(1, "Invite to Group");
                CC_SETOPCURSOR(1, 56);
            };
            if ((int0 == 1)) {
                int3 = 34559 as graphic;
            } else if ((int2 == 1)) {
                int3 = 34564 as graphic;
            } else if ((varbitplayer_56572 == 1)) {
                int3 = 6242 as graphic;
            } else {
                int3 = 34561 as graphic;
            };
            script7918(2, int0, 2, (int1 + 3), 0, 0, 24, 24, 0, 0, int3);
            if (((varbitplayer_56572 == 1) && (int2 == 0))) {
                string0 = "Invite to Group";
            };
            script10485(3, int0, 0, int1, 2, 0, 33, 30, 1, 0, 2100 as dbrow, string0);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETMAXLINES(1);
            script3537(string0);
            if ((((varbitplayer_56572 == 1) && (int2 == 1)) && (int0 > 1))) {
                script7858(4, int0, 5, (int1 + 3), 2, 0, 75, 24, 0, 0, 4476 as dbrow, "Remove");
                CC_SETTEXTFONT(208 as fontmetrics);
                CC_SETOP(1, `Remove ${string0} from group`);
            };
            int1 = (int1 + 32);
        };
    };
    return;
}