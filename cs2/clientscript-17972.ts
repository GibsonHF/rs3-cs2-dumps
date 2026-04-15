//
function script17972(): string {
    var int0 = script17853();
    if ((int0 == -1 as dbrow)) {
        return "The Hero Pass has now ended.";
    };
    var int1 = dbrow_getfield(int0, 991250, 0);
    var int2 = (int1 - DATE_RUNEDAY());
    var string0 = "Pass ends in : ";
    switch (int2) {
        case 0: {
            if ((REBOOTTIMER() > 0)) {
                string0 = `${string0}${script17944()}`;
            } else {
                string0 = "Pass ends today!";
            };
            break;
        }
        case 1: {
            string0 = "Pass ends tomorrow!";
            break;
        }
        default: {
            string0 = `${string0}${inttostring(int2, 10)} days`;
            break;
        }
    };
    return string0;
}