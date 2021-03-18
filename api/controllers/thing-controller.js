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
                    "link": "properties/",
                    "title": "Properties of Lil' Opy IV."
                },
                "product": {
                    "link": "https://pycom.io/product/lopy4/",
                    "title": "Product of this Web Thing."
                },
                "ui": {
                    "link": "ui/",
                    "title": "User Interface"
                }
            }
        }

        res.send(data)
    } catch(error) {
        next(error)
    }
}
