export class ThingController {
    async root(req, res, next) {
        const data = {
            "id": "lil-opy-iv",
            "name": "Lil' Opy IV",
            "description": "A web connected LoPy4.",
            "tags": [
                "lopy4",
                "pycom"
            ],
            "links": {
                "properties": {
                    "link": `${req.protocol}://${req.get('host')}${req.originalUrl}/properties`,
                    "title": "Properties of Lil' Opy IV."
                },
                "product": {
                    "link": "https://pycom.io/product/lopy4/",
                    "title": "Product of this Web Thing."
                },
                "ui": {
                    "link": process.env.UI_URL,
                    "title": "User Interface"
                }
            }
        }

        res.send(data)
    } catch(error) {
        next(error)
    }
}
