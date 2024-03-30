const router = require('express').Router();
const { Project } = require('../models')

router.get('/', async (req, res) => {
  try{
    const projectData = await Project.findAll({
      order: [['name', 'ASC']]
    });
    const projects = projectData.map((project) => project.get({ plain: true }));
    res.render('homepage', { projects });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;