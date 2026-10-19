//
function script21224(): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int3 = 4;
    var int4 = 0;
    var string1 = `The ${string0} plugin uses the following permissions. Please note that all required permissions must be accepted for the plugin to be enabled.`;
    var int5 = script20478(string1, IF_GETWIDTH(int0), 13569, 0);
    stack(int0);
    stack(int4);
    int4 = (int4 + 1);
    script2995(0, int3, 0, 0, 0, int5, 1, 0, 13569, string1);
    int3 = (int3 + (int5 + (4 + 2)));
    stack(int0);
    stack(int4);
    stack(int3);
    stack(int2);
    stack(0);
    script21225();
    [int3, int4] = [];
    int3 = (int3 + (4 + 2));
    stack(int0);
    stack(int4);
    stack(int3);
    stack(int2);
    stack(1);
    script21225();
    [int3, int4] = [];
    int3 = (int3 + (4 + 2));
    stack(int0);
    stack(int4);
    stack(int3);
    stack(int2);
    script21232();
    [int3, int4] = [];
    script19620(int1, int0, int3, -1, -1, 0, 0, 0);
    return;
}