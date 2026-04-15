//
function script19187(int0: struct, int1: obj, int2: component): void {
    switch (int0) {
        case 32986: {
            script17014(int2, `Kill this monster to win: ${OC_NAME(int1)}!`);
            break;
        }
        case 50263: {
            script17014(int2, `Complete this skilling location to win: ${OC_NAME(int1)}!`);
            break;
        }
        case 2951: {
            script17014(int2, `Complete this encounter to win: ${OC_NAME(int1)}!`);
            break;
        }
    };
    return;
}