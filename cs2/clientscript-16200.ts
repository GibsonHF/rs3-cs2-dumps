//
function script16200(int0: number): void {
    if ((int0 == 1)) {
        IF_SETGRAPHIC(15977 as graphic, comp(1253, 56));  // wheel_of_fortune:single_graphic
        IF_SETGRAPHIC(15975 as graphic, comp(1253, 59));  // wheel_of_fortune:multi_graphic
    } else {
        IF_SETGRAPHIC(15975 as graphic, comp(1253, 56));  // wheel_of_fortune:single_graphic
        IF_SETGRAPHIC(15977 as graphic, comp(1253, 59));  // wheel_of_fortune:multi_graphic
    };
    return;
}