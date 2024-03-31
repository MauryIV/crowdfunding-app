const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Project, User } = require('../models')

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

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;