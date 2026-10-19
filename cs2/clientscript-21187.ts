//
function script21187(): void {
    var string0 = "";
    var int3 = 1;
    switch (int1) {
        case -1: {
            string0 = "<lt>";
            var int1 = MAX(0, (varclient_8501 - 1));
            int3 = script9464(-1, (varclient_8501 - 1));
            break;
        }
        case -2: {
            string0 = "<gt>";
            int1 = MIN((int2 - 1), (varclient_8501 + 1));
            int3 = script9464(int1, (int2 - 1));
            break;
        }
        default: {
            string0 = inttostring((int1 + 1), 10);
            break;
        }
    };
    script7862(0, int0, 0, 0, 0, 0, 0, 0, 1, 1, 4476, string0, int3, 1, 1, script6428(varclient_8501, int1));
    CC_SETOP(1, inttostring((int1 + 1), 10));
    CC_SETOPBASE("Page");
    stack(21188);
    stack(int1);
    CC_SETONBUTTONCLICK("i");
    return;
}