//[proc,worldmap_elements_update]
function script295(int0: component, int1: int, int2: int, int3: int, int4: int): void {
    if ((WORLDMAP_GETDISABLEELEMENTS() == 1)) {
        CC_DELETEALL(int0);
        return;
    };
    var int5 = 0;
    var int6 = WORLDMAP_GETCURRENTMAP();
    switch (int6) {
        case 31: {
            int5 = script297(pos(2,50,148,14,61), pos(0,50,149,42,6), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 26: {
            int5 = script300(pos(0,0,2,0,15), 1, "Lower level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,1,3,0,15), 1, "Middle level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,3,4,0,15), 1, "Upper level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,82,1,30), pos(1,42,82,1,30), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,82,13,44), pos(1,42,82,17,44), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,83,5,52), pos(1,42,83,5,52), 0, 65535, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,83,45,16), pos(1,42,83,45,16), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,83,1,48), pos(1,42,83,1,48), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,83,45,37), pos(1,42,83,45,37), 0, 32767, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,83,13,13), pos(1,42,83,13,13), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,82,41,57), pos(1,42,82,41,57), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,82,13,16), pos(1,42,82,17,16), 0, 65535, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,42,82,57,57), pos(1,42,82,57,57), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,42,83,5,45), pos(2,42,83,5,45), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,42,83,53,50), pos(2,42,83,53,50), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,42,82,33,55), pos(2,42,82,33,55), 0, 65535, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,42,82,37,44), pos(2,42,82,37,44), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,42,82,9,5), pos(2,42,82,9,5), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,42,82,21,10), pos(2,42,82,21,10), 0, 32767, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,42,82,17,44), pos(2,42,82,17,44), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 21: {
            int5 = script298(pos(0,44,158,30,18), pos(0,44,158,22,29), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,44,158,30,31), pos(0,44,158,42,21), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,44,158,46,18), pos(0,45,159,30,47), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,44,158,26,11), pos(0,43,158,50,49), 0, 65535, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 20: {
            int5 = script297(pos(0,53,148,26,25), pos(0,54,148,26,22), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 45: {
            int5 = script297(pos(0,46,25,12,14), pos(0,46,26,28,50), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,46,25,44,59), pos(0,46,27,56,16), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 25: {
            int5 = script297(pos(0,47,149,2,25), pos(0,47,149,2,20), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 3: {
            int5 = script298(pos(0,40,148,26,19), pos(0,40,149,30,19), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,40,149,10,49), pos(0,40,148,30,52), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,40,148,14,44), pos(0,40,149,10,44), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,40,148,54,25), pos(0,40,149,50,27), 0, 65535, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,40,149,34,35), pos(0,40,148,34,32), 0, 32767, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,40,148,10,34), pos(0,40,148,50,34), 0, 32767, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 14: {
            int5 = script297(pos(0,39,160,50,49), pos(0,39,160,10,51), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 2: {
            int5 = script297(pos(2,44,157,46,61), pos(1,44,157,46,61), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,44,157,46,3), pos(1,44,157,46,3), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,44,157,22,14), pos(0,44,157,22,14), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,44,157,18,59), pos(0,44,157,18,59), 0, 65535, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,0,1,0,15), 1, "Lower level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,1,1,0,15), 1, "Middle level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,3,1,0,15), 1, "Upper level", 280 as struct, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 6: {
            int5 = script297(pos(0,47,160,46,12), pos(0,35,73,61,8), 0, 32767, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,39,73,61,51), pos(0,39,73,53,15), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 24: {
            int5 = script300(pos(0,0,2,0,48), 1, "War", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,29,81,29,54), pos(0,29,81,41,38), 0, 32767, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,29,81,37,48), pos(0,29,81,13,59), 0, 32767, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,29,81,57,38), pos(0,31,81,41,61), 0, 32767, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,1,2,32,32), 1, "Famine", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,31,81,29,56), pos(0,31,81,21,39), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,31,81,5,26), pos(0,31,81,41,61), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,31,81,33,24), pos(0,31,81,41,61), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,31,81,45,8), pos(0,31,81,41,61), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,31,81,61,5), pos(0,31,81,41,61), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,31,81,41,34), pos(0,33,82,45,4), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,0,1,32,24), 1, "Pestilence", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,33,82,33,10), pos(0,33,82,9,39), 0, 16711807, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,33,82,25,30), pos(0,33,82,45,4), 0, 16711807, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,33,82,17,35), pos(0,36,81,25,31), 0, 16711807, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,2,1,0,8), 1, "Death", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,36,81,53,28), pos(0,36,81,21,35), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 9: {
            int5 = script300(pos(0,1,3,0,40), 1, "Jail", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,0,2,0,16), 1, "Lower level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,1,2,32,16), 1, "Middle level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,2,2,0,16), 1, "Upper level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,1,1,32,0), 1, "Secure sector", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,48,66,21,11), pos(2,49,66,13,6), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,49,66,5,24), pos(1,49,66,5,24), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,49,66,13,49), pos(3,49,66,17,49), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,49,66,41,45), pos(0,49,66,41,42), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,66,21,48), pos(0,49,66,25,46), 0, 16711935, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 15: {
            int5 = script297(pos(0,45,82,17,27), pos(0,44,81,29,37), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 13: {
            int5 = script300(pos(0,0,3,0,8), 1, "Upper level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,41,149,38,56), pos(2,41,149,18,59), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,41,148,50,44), pos(2,41,148,50,39), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 22: {
            int5 = script297(pos(0,52,146,10,25), pos(0,51,67,33,52), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,52,147,10,19), pos(0,51,68,33,13), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,52,147,54,19), pos(0,51,68,61,16), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,52,146,54,25), pos(0,51,67,41,52), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 16: {
            int5 = script300(pos(0,0,8,0,10), 1, "Sub-level 1", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,39,158,14,31), pos(3,28,68,25,54), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,1,6,0,43), 1, "Sub-level 2", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,28,68,5,53), pos(2,28,68,5,53), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,28,68,61,52), pos(2,28,68,61,52), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,28,68,41,37), pos(2,28,68,41,37), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,28,68,1,29), pos(2,28,68,1,29), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,28,68,57,24), pos(2,28,68,57,24), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,30,68,37,40), pos(2,30,68,37,40), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,1,5,0,10), 1, "Sub-level 3", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,28,68,9,42), pos(1,28,68,9,42), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,28,68,29,35), pos(1,28,68,29,35), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,28,68,25,30), pos(1,28,68,25,30), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,28,68,41,17), pos(1,28,68,41,17), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,28,68,9,10), pos(1,28,68,9,10), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,28,68,41,33), pos(1,28,68,41,33), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,29,68,33,36), pos(1,29,68,33,36), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,29,68,29,20), pos(1,29,68,29,20), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,30,68,49,27), pos(1,30,68,49,27), 0, 8323327, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,1,3,0,43), 1, "Sub-level 4", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,29,68,9,56), pos(0,29,68,9,56), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,30,68,21,20), pos(0,30,68,21,20), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,2,2,0,10), 1, "Sub-level 5", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,29,68,29,15), pos(0,45,69,13,33), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,3,0,16,55), 1, "Sub-level 6", 280 as struct, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 30: {
            int5 = script300(pos(0,0,1,0,50), 1, "Lower level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,2,1,0,24), 1, "Middle level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,3,1,0,24), 1, "Upper level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,45,16), pos(0,49,71,45,21), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,13,15), pos(0,49,71,37,15), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,21,21), pos(2,49,71,21,16), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,49,71,33,27), pos(1,49,71,33,22), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,33,38), pos(2,49,71,33,33), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,61,39), pos(1,49,71,41,39), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,57,33), pos(0,49,71,37,33), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,1,27), pos(1,49,71,1,22), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,1,41), pos(0,49,71,1,35), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,9,33), pos(1,49,71,29,33), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,25,17), pos(0,49,71,45,17), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,45,31), pos(0,49,71,45,26), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,49,71,21,33), pos(1,49,71,41,33), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,9,41), pos(2,49,71,9,34), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,1,42), pos(0,49,71,1,35), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,37,45), pos(0,49,71,57,45), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,37,50), pos(1,49,71,37,45), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,33,54), pos(0,49,71,53,54), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,1,48), pos(0,49,71,1,53), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,61,53), pos(1,49,71,13,53), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,45,54), pos(1,49,71,29,54), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,45,4), pos(1,49,71,33,4), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,25,9), pos(1,49,71,25,12), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,1,25), pos(1,49,71,13,25), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,1,9), pos(1,49,71,1,12), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,25,54), pos(1,49,71,37,54), 0, 32512, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,21,7), pos(2,49,71,21,10), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,25,20), pos(2,49,71,25,23), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,49,71,37,33), pos(2,49,71,49,33), 0, 16744192, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,71,5,58), pos(0,49,72,53,35), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,49,72,53,51), pos(0,49,72,53,55), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 23: {
            int5 = script7620(7375 as cs2enum, int0, int1, int2, int3, int4, int5);
            int5 = script7620(7376 as cs2enum, int0, int1, int2, int3, int4, int5);
            int5 = script7620(7377 as cs2enum, int0, int1, int2, int3, int4, int5);
            int5 = script7620(7378 as cs2enum, int0, int1, int2, int3, int4, int5);
            int5 = script7620(7379 as cs2enum, int0, int1, int2, int3, int4, int5);
            int5 = script7620(7380 as cs2enum, int0, int1, int2, int3, int4, int5);
            int5 = script7620(7381 as cs2enum, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 32:
        case 33:
        case 34: {
            int5 = script300(pos(0,0,0,0,15), 1, "The world map screen<br>shows you where you are,<br>and where important<br>features may be found.", 280 as struct, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 36: {
            int5 = script300(pos(0,27,83,1,63), 0, "Lower level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(1,27,83,1,63), 0, "Upper level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,27,83,37,54), pos(0,27,83,53,54), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,27,83,9,34), pos(1,27,83,9,31), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,27,83,1,13), pos(1,27,83,1,9), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,27,83,29,1), pos(0,25,82,53,9), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 41: {
            int5 = script298(pos(0,55,154,10,49), pos(0,55,154,10,53), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,55,154,22,49), pos(0,55,154,22,53), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,55,154,34,49), pos(0,55,154,34,53), 0, 16776960, 6, int0, int1, int2, int3, int4, int5);
            int5 = script298(pos(0,55,154,34,55), pos(0,55,154,34,14), 0, 16711680, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,72,85,9,36), pos(3,72,85,25,36), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,73,85,37,36), pos(3,73,85,53,36), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,72,85,25,50), pos(3,73,87,29,58), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,72,84,33,33), pos(2,72,84,33,33), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,72,85,21,13), pos(2,72,85,21,13), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,73,85,41,19), pos(2,73,85,41,19), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,73,85,13,29), pos(2,73,85,13,29), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,73,87,49,18), pos(2,73,87,49,18), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(3,73,87,33,50), pos(2,73,87,33,50), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,72,84,9,13), pos(1,72,84,9,13), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,72,85,33,3), pos(1,72,85,33,3), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,73,85,5,20), pos(1,73,85,5,20), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,73,85,5,39), pos(1,73,85,5,39), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,73,87,5,34), pos(1,73,87,5,34), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(2,73,87,45,49), pos(1,73,87,45,49), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,72,84,45,12), pos(0,72,84,45,12), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,73,85,57,27), pos(0,73,85,57,27), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(1,73,87,57,44), pos(0,73,87,57,44), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,52,152,2,50), 1, "First level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,51,149,2,50), 1, "Second level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,50,146,2,50), 1, "Third level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,49,143,2,50), 1, "Bottom", 280 as struct, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 43: {
            int5 = script300(pos(0,18,99,37,20), 1, "First level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,16,98,17,25), 1, "Second level", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,18,97,37,10), 1, "Bottom", 280 as struct, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,17,99,5,24), pos(0,20,101,53,23), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,18,99,41,19), pos(0,18,101,29,43), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,20,99,53,44), pos(0,17,101,1,33), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 0: {
            int5 = script297(pos(0,40,151,62,4), pos(0,28,99,21,2), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script297(pos(0,28,99,17,20), pos(0,28,99,37,15), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            int5 = script300(pos(0,40,148,2,10), 1, "Forgotten Sewers", 280 as struct, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 724:
        case 726: {
            int5 = script297(pos(0,40,114,9,45), pos(0,41,114,57,0), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            if ((int6 == 724 as maparea)) {
                int5 = script297(pos(0,41,114,9,50), pos(3,40,115,61,56), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,41,116,5,49), pos(3,41,116,17,40), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,41,116,33,29), pos(2,41,116,45,18), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,41,116,37,2), pos(2,41,116,61,3), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,41,115,53,38), pos(2,41,115,45,46), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,41,115,53,15), pos(2,41,115,1,36), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,41,115,17,5), pos(3,41,115,1,21), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,40,115,37,16), pos(3,40,115,33,25), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,40,115,25,34), pos(3,40,115,29,41), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,40,116,17,4), pos(1,40,115,41,63), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,40,116,53,29), pos(1,40,116,53,11), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,40,116,41,55), pos(1,40,116,21,18), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,40,116,53,53), pos(3,41,116,1,43), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,41,115,29,26), pos(3,41,115,49,29), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,40,116,17,2), pos(3,40,116,57,33), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,41,116,45,8), pos(3,41,115,33,44), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(3,41,115,5,40), pos(2,41,115,1,49), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,41,115,33,32), pos(2,40,115,25,33), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,40,115,33,38), pos(2,40,115,21,42), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,40,116,57,29), pos(2,40,116,17,31), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,41,116,45,31), pos(2,41,116,5,29), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,40,115,57,61), pos(2,40,116,49,7), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(2,40,116,57,30), pos(1,40,116,57,24), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(1,40,115,33,46), pos(1,41,115,13,58), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(1,41,116,61,15), pos(1,41,116,9,10), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
                int5 = script297(pos(1,41,116,45,2), pos(0,41,116,9,12), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            };
            break;
        }
        case 729: {
            int5 = script297(pos(0,36,115,53,15), pos(0,37,114,61,31), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            break;
        }
        case 720:
        case 721: {
            int5 = script297(pos(0,35,118,29,56), pos(0,38,118,25,31), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            if ((int6 == 720 as maparea)) {
                int5 = script297(pos(0,38,115,29,48), pos(0,35,118,41,48), 0, 65280, 6, int0, int1, int2, int3, int4, int5);
            };
            break;
        }
        default: {
            CC_DELETEALL(int0);
            break;
        }
    };
    return;
}