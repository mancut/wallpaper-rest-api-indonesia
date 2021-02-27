const path = require('path')
const fs = require('fs').promises
const fileJson = path.join(__dirname, '..', '..', '..', 'data', 'Islamic.json')

module.exports = async (_, res) => {
    const data = await fs.readFile(fileJson, 'utf-8')
    const wallpaper = JSON.parse(data)
    res.json({ status : true, results : wallpaper})
}
