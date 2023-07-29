const express = require('express')
const authenticateUser = require('../middleware/authentication')
const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats,
} = require('../controllers/jobs')
const testUser = require('../middleware/testUser')

router.route('/').post(testUser,createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').get(getJob).delete(testUser,deleteJob).patch(testUser,updateJob)

module.exports = router
