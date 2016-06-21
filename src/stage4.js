import { sys, sys2, host } from "./lib";
import $ from "jquery";
import { sk, explore, watch, setState, hint } from "./skills";
import { checkStage } from "./lobby";

export default () => {
    sys("You walk down stair and find a heavy door.");
    sys("You are one step away to fresh air! Take it easy. Try to push the door!");
    var heavy_door = {
        name: "heavy_door",
        pushCount: 0
    };
    var sky = {
        name: "sky",
        desc: "such blue"
    };
    var stair = {
        name: 'stair',
        'desc': 'a stair to leave'
    };

    /* Make an array include all objects */

    var item = [heavy_door, sky, stair];

    /* Detect result */

    var checkResult = () => {
        if (heavy_door.pushCount == 3) {
            // clear all objects in this stage
            item.forEach((element) => { element = null; });
            // go next stage
            document.getElementById('stage4').style.display = '';
            sys("*~ You are free now! Thank you for playing! ~*");
            document.getElementById('final').style.display = '';
            checkStage();
        }
    };

    var ex = (itemName) => { explore (item, itemName); }
    var wa = (itemName) => { watch (item, itemName); }
    var se = (itemName, key, value) => { setState (item, itemName, key, value); checkResult(); }
    var ht = () => { hint(); }

    window.e = ex;
    window.w = wa;
    window.s = se;
    window.sk = () => sk(4);
    window.h = ht;
};