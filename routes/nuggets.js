const express = require('express');
const router = express.Router();
const nuggets = require('../nuggets.json')

/* GET nuggets page. */
router.get('/', function(req, res, next) {
    const nextButton = 5;
    const fiveNuggets = [];
    for (i=0;i<5;i++) {
        fiveNuggets.push(nuggets[i])
    }

    res.render('nuggetsHome', { title: 'Nuggets', fiveNuggets, nextButton});
});

router.get('/:next5', (req, res) => {
    const {next5} = req.params;
   
    if(next5 == 0){
        res.redirect('/nuggets')
    }

    const beginning = parseInt(next5);
    const end       = beginning + 5;

    const fiveNuggets= [];
    for(i=beginning;i<end;i++) {
        fiveNuggets.push(nuggets[i]);
    }

    let nextButton = end;
    let previousButton = beginning - 5;
    console.log(beginning, end)

    res.render('nuggetsMore', {title:`Nuggs ${beginning} to ${end}`, fiveNuggets, previousButton, nextButton})
});

// router.get('/:previous5', (req, res) => {
//     const {previous5} = req.params;
//     const beginning = parseInt(previous5)-5;
//     const end = beginning + 5;
//     const fiveNuggets= [];
//     for(i=beginning;i<end;i++) {
//         fiveNuggets.push(nuggets[i]);
//     }

//     console.log(beginning, end)
//     res.render('nuggets', {title:`Nuggets ${beginning} through ${end}`, fiveNuggets})
// });




module.exports = router;
