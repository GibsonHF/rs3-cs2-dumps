//
function script4142(int0: int): void {
    if ((int0 != -1)) {
        varclient_1090 = int0;
        varclient_1091 = int0;
        script3239(int0, 1);
        return;
    };
    if ((script19922() == 1)) {
        varclient_1090 = 20;
        varclient_1091 = 20;
        varclient_7050 = 2;
        script3239(20, 1);
    } else if (((((script6431() == false) && (varclient_1090 != 12)) && (unk11003() == 1)) && (script12477() > varclient_5181))) {
        varclient_1090 = 12;
        varclient_1091 = 12;
        varclient_7050 = 2;
        script3239(12, 1);
    } else if (((varclient_1090 != 0) && ((varclient_5187 == false) || (varclient_5187 == false)))) {
        varclient_1090 = 0;
        varclient_1091 = 0;
        script3239(0, 1);
    } else if ((script1011() == 1)) {
        varclient_1090 = 18;
        varclient_1091 = 18;
        script3239(18, 1);
    } else if ((PLATFORMTYPE() == 1)) {
        varclient_1090 = 17;
        varclient_1091 = 17;
        script3239(17, 1);
    } else if ((script6509() == 1)) {
        varclient_1090 = 13;
        varclient_1091 = 13;
        script3239(13, 1);
        if (((varclient_7050 < 1) && (script17264() == 1))) {
            script17263(5896 as dbrow);
            varclient_7050 = 1;
            script2945();
        };
    } else if ((script15214() == 1)) {
        varclient_1090 = 16;
        varclient_1091 = 16;
        script3239(16, 1);
    } else {
        varclient_3684 = 0;
        varclient_1090 = 8;
        varclient_1091 = 8;
        script3239(8, 1);
    };
    return;
}