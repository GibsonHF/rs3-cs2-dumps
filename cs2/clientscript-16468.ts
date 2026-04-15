//
function script16468(int0: int, int1: component): void {
    var int2 = 9939 as graphic;
    var string0 = "";
    var int3 = -1 as quest;
    switch (int0) {
        case 1: {
            string0 = "Torag";
            if ((varbitplayer_4558 == 1)) {
                string0 = strconcat("<str=a5c6d6>", string0);
                int2 = 9940 as graphic;
            };
            CC_SETONVARTRANSMIT(callback(script16467, int0, int1, 1513, 1));
            break;
        }
        case 2: {
            string0 = "Dharok";
            if ((varbitplayer_4555 == 1)) {
                string0 = strconcat("<str=a5c6d6>", string0);
                int2 = 9940 as graphic;
            };
            CC_SETONVARTRANSMIT(callback(script16467, int0, int1, 1513, 1));
            break;
        }
        case 3: {
            string0 = "Verac";
            if ((varbitplayer_4559 == 1)) {
                string0 = strconcat("<str=a5c6d6>", string0);
                int2 = 9940 as graphic;
            };
            CC_SETONVARTRANSMIT(callback(script16467, int0, int1, 1513, 1));
            break;
        }
        case 4: {
            string0 = "Guthan";
            if ((varbitplayer_4556 == 1)) {
                string0 = strconcat("<str=a5c6d6>", string0);
                int2 = 9940 as graphic;
            };
            CC_SETONVARTRANSMIT(callback(script16467, int0, int1, 1513, 1));
            break;
        }
        case 5: {
            string0 = "Karil";
            if ((varbitplayer_4557 == 1)) {
                string0 = strconcat("<str=a5c6d6>", string0);
                int2 = 9940 as graphic;
            };
            CC_SETONVARTRANSMIT(callback(script16467, int0, int1, 1513, 1));
            break;
        }
        case 6: {
            int3 = 194 as quest;
            if ((QUEST_FINISHED(int3) == false)) {
                int2 = 9941 as graphic;
                string0 = "Quest Required";
            } else {
                string0 = "Akrisae";
                if ((varbitplayer_11655 == 1)) {
                    string0 = strconcat("<str=a5c6d6>", string0);
                    int2 = 9940 as graphic;
                };
            };
            CC_SETONVARTRANSMIT(callback(script16467, int0, int1, 2434, 1));
            break;
        }
        case 7: {
            int3 = 384 as quest;
            if ((QUEST_FINISHED(int3) == false)) {
                int2 = 9941 as graphic;
                string0 = "Quest Required";
            } else {
                string0 = "Linza";
                if ((varbitplayer_31434 == 1)) {
                    string0 = strconcat("<str=a5c6d6>", string0);
                    int2 = 9940 as graphic;
                };
            };
            CC_SETONVARTRANSMIT(callback(script16467, int0, int1, 6274, 1));
            break;
        }
        default: {
            string0 = "Ahrim";
            if ((varbitplayer_4554 == 1)) {
                string0 = strconcat("<str=a5c6d6>", string0);
                int2 = 9940 as graphic;
            };
            CC_SETONVARTRANSMIT(callback(script16467, int0, int1, 1513, 1));
            break;
        }
    };
    var int4 = 13;
    if (((int3 != -1 as quest) && (int2 == 9941 as graphic))) {
        script3537(`To unlock this brother, you must complete the Quest: ${QUEST_GETNAME(int3)}`);
        int4 = (int4 + 16);
    };
    script7918((int0 + 1), 1, 0, 0, 0, 1, 11, 11, 0, 0, int2);
    script10485((int0 + 1), 2, 13, 0, 0, 1, int4, 0, 1, 1, 2101 as dbrow, string0);
    if (((int3 != -1 as quest) && (int2 == 9941 as graphic))) {
        script7918((int0 + 1), 3, 0, 0, 2, 1, 16, 16, 0, 0, 9942 as graphic);
    };
    return;
}