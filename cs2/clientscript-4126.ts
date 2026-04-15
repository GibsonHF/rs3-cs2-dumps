//[proc,guesscolour]
function script4126(int0: int): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    var string0 = "";
    var string1 = "";
    [int1, int2, int3] = script2413(int0);
    [int1, int2, int3] = script4127(int1, int2, int3);
    if ((int3 == 0)) {
        return "Black";
    };
    if ((int3 == 255)) {
        return "White";
    };
    if ((int3 < 97)) {
        string0 = "Dark ";
    } else if (((int3 == 127) && (int2 >= 240))) {
        string0 = "Vivid ";
    } else if ((int3 > 157)) {
        string0 = "Light ";
    } else {
        int4 = 0;
    };
    switch (int0) {
        case 16711680:
        case 16744448:
        case 16776960:
        case 65280:
        case 65535:
        case 255:
        case 4194559:
        case 8388863:
        case 16711935: {
            string0 = "Pure ";
            int4 = 1;
            break;
        }
    };
    if ((int4 == 1)) {
        if ((int2 == 0)) {
            string1 = "grey";
        };
        if ((int1 < 10)) {
            string1 = "red";
        } else if ((int1 < 45)) {
            string1 = "orange";
        } else if ((int1 < 75)) {
            string1 = "yellow";
        } else if ((int1 < 140)) {
            string1 = "green";
        } else if ((int1 < 160)) {
            string1 = "turquoise";
        } else if ((int1 < 195)) {
            string1 = "cyan";
        } else if ((int1 < 250)) {
            string1 = "blue";
        } else if ((int1 < 265)) {
            string1 = "indigo";
        } else if ((int1 < 280)) {
            string1 = "violet";
        } else if ((int1 < 290)) {
            string1 = "purple";
        } else if ((int1 < 305)) {
            string1 = "magenta";
        } else if ((int1 < 345)) {
            string1 = "pink";
        } else {
            string1 = "red";
        };
    } else {
        if ((int2 == 0)) {
            string1 = "Grey";
        };
        if ((int1 < 10)) {
            string1 = "Red";
        } else if ((int1 < 45)) {
            string1 = "Orange";
        } else if ((int1 < 75)) {
            string1 = "Yellow";
        } else if ((int1 < 140)) {
            string1 = "Green";
        } else if ((int1 < 160)) {
            string1 = "Turquoise";
        } else if ((int1 < 195)) {
            string1 = "Cyan";
        } else if ((int1 < 250)) {
            string1 = "Blue";
        } else if ((int1 < 265)) {
            string1 = "Indigo";
        } else if ((int1 < 280)) {
            string1 = "Violet";
        } else if ((int1 < 290)) {
            string1 = "Purple";
        } else if ((int1 < 305)) {
            string1 = "Magenta";
        } else if ((int1 < 345)) {
            string1 = "Pink";
        } else {
            string1 = "Red";
        };
    };
    return `${string0}${string1}.`;
}