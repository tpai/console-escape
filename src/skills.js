import { sys, sys2 } from "./lib";

export var sk = (n) => {
    switch(n) {
        case 4:
        case 3:
        case 2:
            sys2("g(someone, item); // give item to someone");
            sys2("s(item, key, value); // Set state of item");
        case 1:
        default:
            sys2(`> e('.'); // explore around you`);
            sys2(`> w(item); // watch specific item\n`);
            sys2(`> h() // help`);
            break;
    }
};

export var explore = (item, itemName) => {
    switch(itemName) {
        case ".":
            console.table(item, ["name"]);
            break;
        default:
            console.dirxml(getObjectByName(item, itemName));
            break; 
    }
};

export var watch = (item, itemName) => {
    var obj = getObjectByName(item, itemName);
    var arr = Object.keys(obj);
    for (var i=0;i<arr.length;i++) {
        if (typeof(obj[arr[i]]) === "function") {
            var params = obj[arr[i]].toString().match(/\([^)]*\)/);
            if (params !== null) {
                console.log(arr[i] + ": " + params);
                sys2(`> ${arr[i]} ${params} ;`);
                window[arr[i]] = obj[arr[i]];
            }
        }
        else {
            console.log(arr[i] + ":", obj[arr[i]])
        }
    }
};

export var setState = (item, itemName, key, value) => {
    var obj = getObjectByName(item, itemName);
    obj[key] = value;
    watch(item, itemName);
};

var getObjectByName = (objArr, name) => {
    var arr = objArr.filter((val)=>{ return val.name === name });
    var result = {};
    arr.length === 1 && (result = arr[0]);
    return result;
};

export var hint = () =>{
    switch (localStorage.nowStage * 1) {
        case 1: sys("Try watch something around you."); break;
        case 2: sys("Why not make friend with a baboon?"); break;
        case 3: sys("Fill the blank."); break;
        case 4: sys("push door X 3"); break;
    }
};
