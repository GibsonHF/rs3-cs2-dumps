//
function script15575(int0: int): void {
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
    if ((CC_FIND(comp(1420, 130), int0) == 1)) {
        IF_SETCOLOUR(CC_GETCOLOUR(), comp(1420, 124));
    };
    IF_SETTEXT(string0, comp(1420, 123));
    return;
}