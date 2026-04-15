//
function script6401(int0: component, int1: int): void {
    var string0 = "null";
    var int2 = 0;
    var string1 = "null";
    [int2, string1] = script530(int0);
    if ((int2 == 1)) {
        string0 = `Assist with ${string1} while using the Assist System (ON).`;
    } else {
        string0 = `Assist with ${string1} while using the Assist System (OFF).`;
    };
    script8800(string0, int0, int1);
    return;
}