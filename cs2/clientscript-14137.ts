//
function script14137(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    while ((++int8 <= 3)) {
        switch (int8) {
            case 1: {
                int0 = script7844(varbitplayer_51611);
                int2 = 67043377;
                int1 = 67043372;
                int3 = 67043375;
                int4 = 67043376;
                int5 = 67043373;
                int6 = 67043378;
                int7 = 67043374;
                break;
            }
            case 2: {
                int0 = script7844(varbitplayer_51612);
                int2 = 67043384;
                int1 = 67043379;
                int3 = 67043383;
                int4 = 67043382;
                int5 = 67043380;
                int6 = 67043385;
                int7 = 67043381;
                break;
            }
            case 3: {
                int0 = script7844(varbitplayer_51613);
                int2 = 67043391;
                int1 = 67043386;
                int3 = 67043390;
                int4 = 67043389;
                int5 = 67043387;
                int6 = 67043392;
                int7 = 67043388;
                break;
            }
        };
        script16787(int1, int0);
        if ((varclient_7075 == false)) {
            IF_SETMODELANIM(-1, int2);
            IF_SETNPCMODEL(-1, int2);
            IF_SETGRAPHIC(-1, int5);
            IF_SETGRAPHIC(-1, int7);
            IF_SETTEXT("", int3);
            IF_SETTEXT("", int4);
            IF_SETONTIMER(callback(script14138, ((int8 - 1) * 15), int1, int2, int3, int4, int5, int6, int0), int1);
            varclient_7076 = 0;
        };
        IF_SETMODELLIGHTING(256, 1024, 0, 255, 255, 255, 3, -2, -6, 3224, int2);
    };
    return;
}