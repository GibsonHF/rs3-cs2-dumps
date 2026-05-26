//
function script4222(): void {
    if (((varclient_1468 > 100) && (varclient_1468 <= 355))) {
        IF_SETTRANS((255 - (varclient_1468 - 100)), 70451200);
    };
    if (((varclient_1468 > 100) && (varclient_1468 <= 150))) {
        IF_SETPOSITION((-35 + (varclient_1468 - 100)), 122, 0, 0, 70451204);
    };
    if (((varclient_1468 > 200) && (varclient_1468 <= 455))) {
        IF_SETPOSITION((-255 + (varclient_1468 - 200)), 70, 0, 0, 70451201);
    };
    if (((varclient_1468 > 250) && (varclient_1468 <= 505))) {
        IF_SETPOSITION((-255 + (varclient_1468 - 250)), 85, 0, 0, 70451202);
    };
    if (((varclient_1468 > 300) && (varclient_1468 <= 555))) {
        IF_SETPOSITION((-255 + (varclient_1468 - 300)), 100, 0, 0, 70451203);
    };
    if (((varclient_1468 > 500) && (varclient_1468 <= 755))) {
        IF_SETPOSITION((0 - (varclient_1468 - 500)), 70, 0, 0, 70451201);
    };
    if (((varclient_1468 > 550) && (varclient_1468 <= 805))) {
        IF_SETPOSITION((0 - (varclient_1468 - 550)), 85, 0, 0, 70451202);
    };
    if (((varclient_1468 > 600) && (varclient_1468 <= 855))) {
        IF_SETPOSITION((0 - (varclient_1468 - 600)), 100, 0, 0, 70451203);
    };
    if ((varclient_1468 == 700)) {
        IF_SETMODELANGLE(0, 0, 0, 210, 0, 1750, 70451204);
    };
    if (((varclient_1468 > 700) && (varclient_1468 <= 955))) {
        IF_SETTRANS((varclient_1468 - 700), 70451200);
    };
    if (((varclient_1468 > 700) && (varclient_1468 <= 750))) {
        IF_SETPOSITION((0 - (varclient_1468 - 700)), 122, 0, 0, 70451204);
    };
    varclient_1468 = (varclient_1468 + 1);
    return;
}