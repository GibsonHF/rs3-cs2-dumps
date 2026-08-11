//
function script6786(int0: number, int1: number): void {
    SOUND_VORBIS_VOLUME(39599 as vorbis, 1, 0, 255);
    stack(208896);
    stack(int1);
    DB_FIND(0);
    var int2 = dbrow_findnext();
    if ((int2 == -1)) {
        return;
    };
    var int3 = script6061(int1);
    var int4 = script6062(int1);
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var string0 = "Build";
    IF_SETGRAPHIC(dbrow_getfield(int2, 208944, MIN(int3, (int4 - 1))), comp(176, 25));  // dino_base_camp:building_image
    if ((int3 < int4)) {
        IF_SETHIDE(false, comp(176, 26));  // dino_base_camp:cost_text_layer
        IF_SETHIDE(false, comp(176, 55));  // dino_base_camp:building_resource_text_1
        IF_SETHIDE(false, comp(176, 56));  // dino_base_camp:building_resource_text_2
        IF_SETHIDE(false, comp(176, 57));  // dino_base_camp:building_resource_text_3
        IF_SETHIDE(false, comp(176, 23));  // dino_base_camp:building_resource_1
        IF_SETHIDE(false, comp(176, 53));  // dino_base_camp:building_resource_2
        IF_SETHIDE(false, comp(176, 54));  // dino_base_camp:building_resource_3
        int6 = dbrow_getfield(int2, 208960, 0);
        if ((int6 != -1)) {
            int5 = dbrow_getfield(int2, 208976, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), comp(176, 55));  // dino_base_camp:building_resource_text_1
            script7019(int6, 11534391, int5);
            IF_SETGRAPHIC(dbrow_getfield(int6, 204864, 0), comp(176, 23));  // dino_base_camp:building_resource_1
            IF_SETONMOUSEREPEAT(callback(script8799, dbrow_getfield(int6, 204816, 0), 11534359, -1), comp(176, 23));  // dino_base_camp:building_resource_1
        } else {
            IF_SETHIDE(true, comp(176, 23));  // dino_base_camp:building_resource_1
            IF_SETHIDE(true, comp(176, 55));  // dino_base_camp:building_resource_text_1
        };
        int6 = dbrow_getfield(int2, 208992, 0);
        if ((int6 != -1)) {
            int5 = dbrow_getfield(int2, 209008, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), comp(176, 56));  // dino_base_camp:building_resource_text_2
            script7019(int6, 11534392, int5);
            IF_SETGRAPHIC(dbrow_getfield(int6, 204864, 0), comp(176, 53));  // dino_base_camp:building_resource_2
            IF_SETONMOUSEREPEAT(callback(script8799, dbrow_getfield(int6, 204816, 0), 11534389, -1), comp(176, 53));  // dino_base_camp:building_resource_2
        } else {
            IF_SETHIDE(true, comp(176, 53));  // dino_base_camp:building_resource_2
            IF_SETHIDE(true, comp(176, 56));  // dino_base_camp:building_resource_text_2
        };
        int6 = dbrow_getfield(int2, 209024, 0);
        if ((int6 != -1)) {
            int5 = dbrow_getfield(int2, 209040, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), comp(176, 57));  // dino_base_camp:building_resource_text_3
            script7019(int6, 11534393, int5);
            IF_SETGRAPHIC(dbrow_getfield(int6, 204864, 0), comp(176, 54));  // dino_base_camp:building_resource_3
            IF_SETONMOUSEREPEAT(callback(script8799, dbrow_getfield(int6, 204816, 0), 11534390, -1), comp(176, 54));  // dino_base_camp:building_resource_3
        } else {
            IF_SETHIDE(true, comp(176, 54));  // dino_base_camp:building_resource_3
            IF_SETHIDE(true, comp(176, 57));  // dino_base_camp:building_resource_text_3
        };
        int7 = dbrow_getfield(int2, 209072, 0);
        IF_SETTEXT(script7135(int7, int3), comp(176, 58));  // dino_base_camp:building_prerequisites
        if ((int3 > 0)) {
            string0 = "Upgrade";
        };
        script13969(11534395, 11534396, 28553, string0);
    } else {
        IF_SETTEXT("", comp(176, 58));  // dino_base_camp:building_prerequisites
        IF_SETHIDE(true, comp(176, 26));  // dino_base_camp:cost_text_layer
        IF_SETHIDE(true, comp(176, 55));  // dino_base_camp:building_resource_text_1
        IF_SETHIDE(true, comp(176, 56));  // dino_base_camp:building_resource_text_2
        IF_SETHIDE(true, comp(176, 57));  // dino_base_camp:building_resource_text_3
        IF_SETHIDE(true, comp(176, 23));  // dino_base_camp:building_resource_1
        IF_SETHIDE(true, comp(176, 53));  // dino_base_camp:building_resource_2
        IF_SETHIDE(true, comp(176, 54));  // dino_base_camp:building_resource_3
        script13971(11534395, 11534396, 28553, "Upgrade", 1);
    };
    return;
}