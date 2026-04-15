//
function script12515(int0: unknown_int, int1: component): void {
    var string0 = "";
    switch (int0) {
        case 1: {
            string0 = `Seren reputation: ${inttostring(varbitplayer_30864, 10)}/${inttostring(5000, 10)}`;
            if ((varbitplayer_30930 == 1)) {
                string0 = strconcat("<col=00FF00>Bounty Accepted</col><br>", string0);
            };
            if ((varbitplayer_30931 == 1)) {
                string0 = strconcat("<col=FF0000>Bounty Target</col><br>", string0);
            };
            break;
        }
        case 2: {
            string0 = `Sliske reputation: ${inttostring(varbitplayer_30865, 10)}/${inttostring(5000, 10)}`;
            if ((varbitplayer_30930 == 2)) {
                string0 = strconcat("<col=00FF00>Bounty Accepted</col><br>", string0);
            };
            if ((varbitplayer_30931 == 2)) {
                string0 = strconcat("<col=FF0000>Bounty Target</col><br>", string0);
            };
            break;
        }
        case 3: {
            string0 = `Zamorak reputation: ${inttostring(varbitplayer_30871, 10)}/${inttostring(5000, 10)}`;
            if ((varbitplayer_30930 == 3)) {
                string0 = strconcat("<col=00FF00>Bounty Accepted</col><br>", string0);
            };
            if ((varbitplayer_30931 == 3)) {
                string0 = strconcat("<col=FF0000>Bounty Target</col><br>", string0);
            };
            break;
        }
        case 4: {
            string0 = `Zaros reputation: ${inttostring(varbitplayer_30870, 10)}/${inttostring(5000, 10)}`;
            if ((varbitplayer_30930 == 4)) {
                string0 = strconcat("<col=00FF00>Bounty Accepted</col><br>", string0);
            };
            if ((varbitplayer_30931 == 4)) {
                string0 = strconcat("<col=FF0000>Bounty Target</col><br>", string0);
            };
            break;
        }
    };
    script8800(string0, int1, -1);
    return;
}