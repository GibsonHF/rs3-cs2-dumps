//
function script7567(int0: int): void {
    var string0 = "";
    var int1 = -1 as graphic;
    switch (int0) {
        case 0: {
            string0 = "<col=ff9040>Inactive destination</col><br>Inactive destinations are not ready to receive a boulder yet, and will therefore block the path of any that roll across them. This will cause the boulder to crash and be destroyed.";
            int1 = 16540 as graphic;
            break;
        }
        case 1: {
            string0 = "<col=ff9040>Active destination</col><br>There is only one active destination at a time. Boulders should be rolled into the current active destination to unlock the next one.";
            int1 = 16541 as graphic;
            break;
        }
        case 2: {
            string0 = "<col=ff9040>Complete destination</col><br>Destinations are complete when a boulder has been rolled into them. The boulder within the destination will allow other boulders to roll across the top in any direction.";
            int1 = 16542 as graphic;
            break;
        }
        case 3: {
            string0 = "<col=ff9040>Pressure pad</col><br>When a boulder rolls over a pressure pad, the pad will rotate by 90 degrees. If the boulder is then destroyed before reaching an active destination, the pressure pad will return to its original position.";
            int1 = 16543 as graphic;
            break;
        }
        case 4: {
            string0 = "<col=ff9040>Auto-rotating pad</col><br>Auto-rotating pads rotate by themselves every few seconds. These pads are surrounded by gates, enabling the boulder to be released only when it can roll across the pad.";
            int1 = 16544 as graphic;
            break;
        }
        case 5: {
            string0 = "<col=ff9040>Gated pad</col><br>Gated pads are intelligent; they will stop the boulder if the next track piece is an auto-rotating pad or a conveyor belt. The boulder must be released before it will begin moving again.";
            int1 = 16545 as graphic;
            break;
        }
        case 6: {
            string0 = "<col=ff9040>Conveyor belt</col><br>Conveyor belts will move the boulder in the direction the belt is currently moving. Conveyor belts are surrounded by gates, enabling the boulder to be released only when the belt is moving in the correct direction.";
            int1 = 16546 as graphic;
            break;
        }
    };
    if (((script6431() == false) && (CC_FIND(comp(1399, 2), int0) == 1))) {
        CC_SETGRAPHIC(int1);
    };
    script16746(string0);
    return;
}