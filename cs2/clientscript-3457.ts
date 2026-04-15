//
function script3457(int0: component, int1: int): void {
    var int2 = (CLIENTCLOCK() - int1);
    if (((int2 < 100) && (varclient_1281 > 0))) {
        CAM_LOOKAT(varclient_1285, varclient_1286, 3000, varclient_1282);
        CAM_MOVETO(varclient_1283, varclient_1284, 3000, varclient_1282);
        return;
    };
    if (((int2 < 200) && (varclient_1281 > 1))) {
        CAM_LOOKAT(varclient_1289, varclient_1290, 0, varclient_1282);
        CAM_MOVETO(varclient_1287, varclient_1288, 0, varclient_1282);
        return;
    };
    if (((int2 < 300) && (varclient_1281 > 2))) {
        CAM_LOOKAT(varclient_1293, varclient_1294, 0, varclient_1282);
        CAM_MOVETO(varclient_1291, varclient_1292, 0, varclient_1282);
        return;
    };
    if (((int2 < 400) && (varclient_1281 > 3))) {
        CAM_LOOKAT(varclient_1297, varclient_1298, 0, varclient_1282);
        CAM_MOVETO(varclient_1295, varclient_1296, 0, varclient_1282);
        return;
    };
    if (((int2 < 500) && (varclient_1281 > 4))) {
        CAM_LOOKAT(varclient_1301, varclient_1302, 0, varclient_1282);
        CAM_MOVETO(varclient_1299, varclient_1300, 0, varclient_1282);
        return;
    };
    if (((int2 < 600) && (varclient_1281 > 5))) {
        CAM_LOOKAT(varclient_1305, varclient_1306, 0, varclient_1282);
        CAM_MOVETO(varclient_1303, varclient_1304, 0, varclient_1282);
        return;
    };
    if (((int2 < 700) && (varclient_1281 > 6))) {
        CAM_LOOKAT(varclient_1309, varclient_1310, 0, varclient_1282);
        CAM_MOVETO(varclient_1307, varclient_1308, 0, varclient_1282);
        return;
    };
    if (((int2 < 800) && (varclient_1281 > 7))) {
        CAM_LOOKAT(varclient_1313, varclient_1314, 0, varclient_1282);
        CAM_MOVETO(varclient_1311, varclient_1312, 0, varclient_1282);
        return;
    };
    IF_SETONTIMER(callback(), int0);
    return;
}