//
function script17908(int0: unknown_int, int1: stat, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: int): string {
    var string0 = "";
    switch (int0) {
        case 8157: {
            string0 = `While training ${enum_getvalue(17, 36, 680 as cs2enum, int1)}, you will gain ${inttostring(int7, 10)} Hero points per timer interval.`;
            break;
        }
        case 8155: {
            string0 = `When completing ${script17849(int4)} steps, you gain ${inttostring(int7, 10)} Hero points.`;
            break;
        }
        case 8156: {
            string0 = `When fighting non-boss monsters, you will gain ${inttostring(int7, 10)} Hero points per timer interval.`;
            break;
        }
        case 8158: {
            string0 = "When earning Marks of War, you'll gain 1 Hero point for every 5 marks of war.";
            break;
        }
        default: {
            script12478("Missing progression type plugin point.");
            break;
        }
    };
    return string0;
}