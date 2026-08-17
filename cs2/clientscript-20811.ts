//
function script20811(int0: number, int1: number, int2: number): void {
    switch (int0) {
        case 99352601: {
            IF_SETONRESIZE(callback(script20770, int0, int1, int2), int0);
            IF_CALLONRESIZE(int0);
            break;
        }
        case 99090448: {
            IF_SETONRESIZE(callback(script20749, int0, int1, int2, int3), int0);
            IF_CALLONRESIZE(int0);
            break;
        }
        case 99483660: {
            IF_SETONRESIZE(callback(script20832, int0, int1, int2), int0);
            IF_CALLONRESIZE(int0);
            break;
        }
        default: {
            script12478("Missing selected state plug-in.");
            break;
        }
    };
    return;
}