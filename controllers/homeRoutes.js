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

router.get('/:user_id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      where: {
        user_id: req.session.user_id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;