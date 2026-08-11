//
function script19009(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = -1;
    var int8 = int2;
    var int9 = int2;
    var string0 = "Dig";
    if ((int0 == 49941)) {
        string0 = "Prepare";
        [int7, int5, int6] = script18988(int1);
        if ((int1 == 12)) {
            int9 = 66;
            var int4 = (int4 - (int9 - int2));
            string0 = "Complete";
        };
    };
    CC_CREATE(comp(1870, 16), 5, int1);  // trh119_buried_treasure_overlay:grid_rect_layer
    CC_SETSIZE(int8, int9, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETGRAPHIC(int5);
    CC_SETOP(1, string0);
    CC_SETONOP(callback(script19007, int1, -2147483644));
    CC_CREATE(comp(1870, 18), 5, int1);  // trh119_buried_treasure_overlay:grid_chest_layer
    CC_SETOPCURSOR(1, 173);
    CC_SETSIZE(int8, int9, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETONVARTRANSMIT(callback(script19014, int1, 7940, 7941, 7932, 7933, 7934, 7935, 7936, 7937, 7938, 9));
    CC_CREATE(comp(1870, 17), 5, int1);  // trh119_buried_treasure_overlay:grid_hover_layer
    CC_SETSIZE(int8, int9, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, int6));
    CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, -1));
    return;
}