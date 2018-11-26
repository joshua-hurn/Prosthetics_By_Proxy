# Covalence Full Stack Project Boilerplate
This boilerplate includes build scripts and setup for a ReactJS front-end and an ExpressJS back-end.

### Getting Started
Remember to run `npm install` to install all necessary dependencies. __Also read the Setting Environment Properties section below!__

### Careful!
Make sure you are always working within the front-end or back-end `src` directory. Stay out of the `dist` and `lib` directories, as their contents will be erased each time the source code is transpiled.

### (NEW) Setting Environment Properties
This boilerplate has been updated to use a configuration method that does not require macOS/Linux. Here is what you need to know:
* Don't worry about `ENV_VAR` or `bash` variables if you recall them from a previous version of this boilerplate.
* Your variables/properties that contain private data are now in a config that can be imported from `config/index.js`, or just `config`. Here is an example:

  ```js
  import { config } from '../relative/path/to/config';
  console.log(config.STRIPE_SK);
  ```
* `index.js` in the `config` folder is a "normalization" point. It is a single point of export, where either development or production data will be gathered, and then exported.
* `config/env/development.js` is included in the `.gitignore` of this boilerplate. As it is where you will be typing your API keys for local use, IT IS IMPORTANT THIS FILE IS NOT PUSHED TO GITHUB. __It is your responsiblity to ensure that this file is not prepped for staging/commit before you commit changes to your project__.
  * Because it is not included in git, it may not be in this boilerplate to begin with. Inside `server/src/config/env`, create a file called `development.js` (CHECK SPELLING!) with the following contents:

  ```js
  // file: server/src/config/env/development.js
  // This object should mimic the structure of the object in env/production, but should use actual values
  let cfg = {
      MAILGUN_API_KEY: 'Your Mailgun API Key Here',
      STRIPE_SK: 'Your Stripe Secret Key Here'
  };

  export { cfg };
  ```

  * Note that in this file, you will actually be typing your API keys. Again, this is why it is important this file is ignored by git.
* To review, for any "secret" value, you can put it in the config. It will need to be added in 3 places:
  * `server/src/config/env/development.js`- add the property and actual value to the exported object
  * `server/src/config/env/production.js`- add the property and use a Node environment property as the value. ex: `process.env.SOME_PROP`
  * In your deployment environment (AWS, Heroku, etc.), set your Environment Properties: `NODE_ENV`, `STRIPE_SK`, etc.
    * The `NODE_ENV` environment property should be set to "production" (no quotes) in AWS, Heroku, etc.

### Running
* To run the project during development (for automatic transpile and server restart), use `npm run dev`.
* `npm start` will be used in a production environment. It transpiles once and does not look for changes.

### Importing Images and Documents
* This boilerplate sets up `file-loader` in the the `webpack.config.js` file.
* By using `file-loader`, you can keep your images/documents in logical folders within your components, and then import them using their relative paths. During the build process, webpack will copy the files into the `client/dist` folder, giving them a hash-based name and updating your html to use the correct name and path.
* Usage:
  * Files with `png`, `jpg`, and `gif` extensions can be imported into your Component and used as follows (note the braces used in the `src` attribute):

  ```js
  import myLogo from '../relativePath/to/logo.png';

  render() {
      ...
      <img src={myLogo} alt="My Company Logo" />
      // Final html may look like: <img src="/dist/images/1aecb1718293a.png" alt="My Company Logo>
      ...
  }
  ```
  
  * Files with `pdf` extensions can be imported into your Component and used as follows (note the braces used in the `href` attribute):

  ```js
  import myDoc from '../relativePath/to/doc.pdf';

  render() {
      ...
      <a href={myDoc}>Click here!</a>
        // Final html may look like: <a href="/dist/docs/38923afdbc.pdf">Click here!</a>
      ...
  }
  ```
* If you need to support additional file types, feel free to modify the `webpack.config.js`. You should be able to discern the sections for image handling vs document handling.