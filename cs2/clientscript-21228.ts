//
function script21228(): void {
    stack(int5);
    script21229();
    var int6 = [];
    var int7 = 0;
    var int8 = 0;
    var string0 = "";
    if ((int6 <= 0)) {
        stack(int2);
        stack(int1);
        return;
    };
    stack(int0);
    stack(int1);
    var int1 = (int1 + 1);
    script2995(int3, int2, 0, 0, int4, 16, 0, 0, 2100, "Website addresses this plugin will access:");
    var int2 = (int2 + 16);
    while ((int7 < int6)) {
        stack(int5);
        stack(int7);
        script21230();
        string0 = [];
        int8 = script20478(string0, int4, 2100, 0);
        stack(int0);
        stack(int1);
        int1 = (int1 + 1);
        script2995(int3, int2, 0, 0, int4, int8, 0, 0, 2100, `  - ${string0}`);
        int2 = (int2 + int8);
        int7 = (int7 + 1);
    };
    stack((int2 + 4));
    stack(int1);
    return;
}