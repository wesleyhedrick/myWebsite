const express = require('express');
const router = express.Router();
let allProjects = require('../projects');
let projectModels = require('../datamanipulation/projectsModels')

/* GET Portfolio page. */
router.get('/', function(req, res, next) {
    const nextButton = 5;
    const projectSamples = projectModels.loadProjects(0, 5, 'projectSamples', allProjects)
    res.render('portfolioHome', { title: 'Projects! Project! Projects!', projectSamples, nextButton});
});

router.get('/:next', (req, res) => {
    const {next} = req.params;
    if(next<1){
        res.redirect('/portfolio')
    }
    
    const startingIndex = parseInt(next);
    const endingIndex   = startingIndex + 5;
    const projectSamples = projectModels.loadProjects(startingIndex, endingIndex, 'projectSamples', allProjects);
    console.log(projectSamples);

    const previousButton = startingIndex - 5;
    const nextButton = startingIndex + 5; 
    res.render('portfolioMore', {title: 'More Projects!', projectSamples, previousButton, nextButton});
})

module.exports = router;

