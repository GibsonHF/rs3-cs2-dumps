//
function script9418(int0: component, int1: unknown_int): void {
    var string0 = "";
    switch (int1) {
        case 0: {
            string0 = "Bronze token required";
            break;
        }
        case 1: {
            string0 = "Silver token required";
            break;
        }
        case 2: {
            string0 = "Gold token required";
            break;
        }
        case 3: {
            string0 = "Rune token required";
            break;
        }
        case 4: {
            string0 = "Dragon token required";
            break;
        }
    };
    script8800(string0, int0, -1);
    return;
}