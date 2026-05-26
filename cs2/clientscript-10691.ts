//
function script10691(int0: number): void {
    var int1 = 0;
    var string0 = "";
    var int2 = -1;
    switch (int0) {
        case 101253120: {
            int1 = varbitplayer_25553;
            string0 = "Activate double points.";
            int2 = 101253147;
            break;
        }
        case 101253122: {
            int1 = varbitplayer_25554;
            string0 = "Activate immunity.";
            int2 = 101253154;
            break;
        }
        case 101253124: {
            int1 = varbitplayer_25555;
            string0 = "Activate double points.";
            int2 = 101253158;
            break;
        }
        case 101253127: {
            int1 = varbitplayer_25556;
            string0 = "Subdue all automatons.";
            int2 = 101253162;
            break;
        }
    };
    if ((int2 == -1)) {
        return;
    };
    if ((int1 == 0)) {
        string0 = strconcat(string0, "<br>0 charges.");
        script10692(int0, 1);
    } else {
        script10692(int0, 0);
        if ((int1 == 1)) {
            string0 = strconcat(string0, "<br>1 charge.");
        } else {
            string0 = strconcat(string0, `<br>${inttostring(int1, 10)} charges.`);
        };
    };
    IF_SETTEXT(string0, int2);
    return;
}