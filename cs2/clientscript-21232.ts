//
function script21232(): void {
    stack(int3);
    script21233();
    var int4 = [];
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var string0 = "";
    var int10 = 0;
    if ((int4 <= 0)) {
        stack(int2);
        stack(int1);
        return;
    };
    stack(int0);
    stack(int1);
    var int1 = (int1 + 1);
    script2995(0, int2, 0, 0, 0, 20, 1, 0, 1897, "Required dependency permissions");
    var int2 = (int2 + 20);
    while ((int5 < int4)) {
        stack(int3);
        stack(int5);
        script21234();
        int7 = [];
        stack(int7);
        stack(150);
        stack(-1);
        unk11539();
        int9 = [];
        if ((int9 > 0)) {
            stack(int7);
            stack(6);
            stack(-1);
            unk11849();
            string0 = [];
            stack(int0);
            stack(int1);
            int1 = (int1 + 1);
            script2995(0, int2, 0, 0, 0, 16, 1, 0, 2196, string0);
            int2 = (int2 + 16);
            int6 = 0;
            while ((int6 < int9)) {
                stack(int7);
                stack(152);
                stack(int6);
                unk11539();
                int8 = [];
                stack(int0);
                stack(int1);
                stack(int2);
                stack(int7);
                stack(int8);
                script21226();
                [int2, int1] = [];
                int6 = (int6 + 1);
            };
            int10 = 1;
        };
        int5 = (int5 + 1);
    };
    if ((int10 == 0)) {
        stack(int0);
        stack(int1);
        int1 = (int1 + 1);
        script2995(0, int2, 0, 0, 0, 16, 1, 0, 13569, "There are no required permissions from dependency plugins.");
        int2 = (int2 + 16);
    };
    stack(int2);
    stack(int1);
    return;
}