//
function script21225(): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var string0 = "";
    var string1 = "";
    switch (int4) {
        case 1: {
            string0 = "Optional permissions";
            string1 = "There are no optional permissions for this plugin.";
            stack(int3);
            stack(151);
            stack(-1);
            unk11539();
            int5 = [];
            int8 = 153;
            break;
        }
        case 0: {
            string0 = "Required permissions";
            string1 = "There are no required permissions for this plugin.";
            stack(int3);
            stack(150);
            stack(-1);
            unk11539();
            int5 = [];
            int8 = 152;
            break;
        }
    };
    stack(int0);
    stack(int1);
    var int1 = (int1 + 1);
    script2995(0, int2, 0, 0, 0, 20, 1, 0, 1897, string0);
    var int2 = (int2 + 20);
    if ((int5 <= 0)) {
        stack(int0);
        stack(int1);
        int1 = (int1 + 1);
        script2995(0, int2, 0, 0, 0, 16, 1, 0, 13569, string1);
        int2 = (int2 + 16);
    } else {
        while ((int6 < int5)) {
            stack(int3);
            stack(int8);
            stack(int6);
            unk11539();
            int7 = [];
            stack(int0);
            stack(int1);
            stack(int2);
            stack(int3);
            stack(int7);
            script21226();
            [int2, int1] = [];
            int6 = (int6 + 1);
        };
    };
    stack(int2);
    stack(int1);
    return;
}