const Package = {
	"name": process.argv[2],
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"dependencies": {

	},
	"devDependencies": {

	},
	"scripts": {
		"start": "parcel ./public/index.html --open",
    	"build": "parcel build ./public/index.html --public-url ./",
    	"test": "jest --watchAll",
    	"prettier": "prettier --print-width 80 --no-semi --single-quote --trailing-comma es5 --write src/**/*.js"
	},
	 "jest": {
        "setupFilesAfterEnv": [
            "./src/setupTest.js"
        ],
        "snapshotSerializers": ["enzyme-to-json/serializer"]
    },
	"author": "",
	"license": "MIT"
};
export{
	Package
}