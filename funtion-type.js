// 1-10 number print 

const printNumber = (i) => {
    if(i <= 10) {
        console.log(i)  // 1
        i++
        printNumber(i);
    }   
}

printNumber(1)   // 1

// clouser and callback 
// setTimeout(), setInterval()


const cats = [
    {
        name: "Category 1",
        children: [
            {
                name: "Category 1.1",
                children: [
                    {
                        name: "Category 1.1.1",
                        children: null
                    },
                    {
                        name: "Category 1.1.2",
                        children: null
                    }
                ]
            },
            {
                name: "Category 1.2",
                children: null
            }
        ]
    },
    {
        name: "Category 2",
        children: [
            {
                name: "Category 2.1",
                children: null
            },
            {
                name: "Category 2.2",
                children: null
            }
        ]
    },
    {
        name: "Category 3",
        children: null
    }
]
/**
 * 
 * Category 1
 *     Category 1.1
 *         Category 1.1.1
 *         Category 1.1.2
 *     Category 1.2
 * Category 2 
 *     Category 2.1
 *     Category 2.2
 * Category 3
 */

const categories = [
    {
        name: 'Motors, Tools & DIY',
        children: [
            {
                name: "Lubricants",
                children: null,
            },
            {
                name: "Motorcycles",
                children: [
                    {
                        name: "Standard Bikes",
                        children: null
                    },
                    {
                        name: "Electric Bikes",
                        children: null
                    },
                    {
                        name: "Scooters",
                        children: null
                    }
                ]
            }
        ]
    }
]

const printName = (name) => {
    console.log(name);
}

const spaceCalc = (i)  =>{
    let gap = "";
    for(let j = 0; j < i; j++) {
        gap += "    ";
    }  
    return gap;
}
 // [{children: [{},{},{}]}, {}, {}]
const printCategories = (catList, i = 0) => {  
    let gap = spaceCalc(i)
    for(let cat of catList) {
        printName(gap+cat.name)
        if(cat.children) {
            i++;
            printCategories(cat.children, i)
        }
    }
}
printCategories(cats)

/**
 * Motors, Tools & DIY 
 *     Lubricants
 *     Motorcycles
 *         Standard Bikes
 *         Electric Bikes
 *         Scooters
 */