var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const MulterAzureStorage = require(‘multer-blob-storage’).MulterAzureStorage
const connectionString = ‘DefaultEndpointsProtocol=https;AccountName=kthstorage;AccountKey=YbdEDgT3w18So4Cnb4Rod8GFJjKXh/IoAap6pPzmCdWR+wM4yBkKPc80zO11NAP7qlfuZ/In6W7k+AStK9m8aw==;EndpointSuffix=core.windows.net’
const accessKey = ‘KKdTAz4oHN39fuMiKllCVxlRAD3fylmNzd9glfeTtykM8Luk00anaFILObyQFkPmuK2AM+KXpWyP+ASt3FOn3df=’
const accountName = ‘kthstorage’
