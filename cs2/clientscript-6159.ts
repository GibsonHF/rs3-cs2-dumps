//
function script6159(int0: component): void {
    var string0 = "Current Floor.";
    switch (varclient_1917) {
        case 1: {
            string0 = "Current Floor: Bottom Floor";
            break;
        }
        case 2: {
            string0 = "Current Floor: Middle Floor";
            break;
        }
        case 3: {
            string0 = "Current Floor: Top Floor";
            break;
        }
    };
    if ((script6431() == false)) {
        script8800(string0, int0, -1);
    } else {
        script426(string0, int0, -1, 0);
    };
    return;
}