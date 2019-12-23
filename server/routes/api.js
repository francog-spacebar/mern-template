'use strict'

const express = require('express')
const router = express.Router()
const api = require('../src/api')

router.post('/notifyUnusual', api.notifyUnusual)
router.post('/loginInternalUser', api.loginInternalUser)
router.get('/allowOwnerSwapBattery', api.allowOwnerSwapBattery)
router.post('/createOwner', api.createOwner)
router.post('/updateOwnerInfo', api.updateOwnerInfo)
router.post('/getOwnerInfo', api.getOwnerInfo)
router.post('/getSwapRecord', api.getSwapRecord)
router.post('/getCabinetStatus', api.getCabinetStatus)
router.post('/getOwnerRecord', api.getOwnerRecord)
router.post('/getBatteryStatus', api.getBatteryStatus)

module.exports = router
