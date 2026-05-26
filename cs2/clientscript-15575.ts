//
function script15575(int0: number): void {
    var string0 = "";
    var string1 = "";
    switch (varclient_3482) {
        case 0: {
            string0 = "Skin Colour";
            break;
        }
        case 1: {
            string0 = "Hair Colour";
            break;
        }
        case 5: {
            string0 = "Beard Colour";
            break;
        }
        case 2: {
            string0 = "Torso Colour";
            break;
        }
        case 3: {
            string0 = "Leg Colour";
            break;
        }
        case 4: {
            string0 = "Shoe Colour";
            break;
        }
    };
    if ((CC_FIND(93061250, int0) == 1)) {
        IF_SETCOLOUR(CC_GETCOLOUR(), 93061244);
    };
    IF_SETTEXT(string0, 93061243);
    return;
}