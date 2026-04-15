//
function script19842(int0: achievement, string0: string): string {
    var int1 = unk11017(int0);
    if ((int1 != -1)) {
        switch (int1) {
            case 13980:
            case 14042:
            case 14305:
            case 14313:
            case 14314:
            case 14420: {
                var string0 = script19826(int0, string0);
                break;
            }
        };
    };
    if ((int0 == 2852 as achievement)) {
        if ((varbitplayer_11754 == 0)) {
            string0 = "Complete a task from each Slayer Master consecutively, starting with Turael and ending with Laniakea.";
        } else {
            string0 = "Complete a task from each Slayer Master consecutively, starting with Spria and ending with Laniakea.";
        };
    };
    return string0;
}